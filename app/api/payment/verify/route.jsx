import Razorpay from 'razorpay'
import crypto from 'crypto'

export const POST = async (req, res) => {
    try {

        const data = await req.json();

        // console.log(data);

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = data;

        const sign = razorpay_order_id + '|' + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');
        
        if (razorpay_signature === expectedSign) {
            return new Response(JSON.stringify({success: true, message: 'Payment verified successfully', data}), { status: 200 });
        } else {
            return new Response(JSON.stringify({success: false, message: 'Invalid signature sent!', data}), { status: 400 });
        }

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({success: false, message: "Failed to make payment!", data}), { status: 500 });
    }
}




