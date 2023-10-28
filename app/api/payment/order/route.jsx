import Razorpay from 'razorpay'
import crypto from 'crypto'

import User from '@/models/user'
import Vehicle from '@/models/vehicle'
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

import { calcDailyPrice, calcMonthlyPrice, calcHourlyPrice, calcWeeklyPrice } from '@/utils/priceCalc'

export const POST = async (req, res) => {
    try {
        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        const data = await req.json();
        console.log(data);
        const {pickingDate, droppingDate, vehicleId, city, vehicleType, bookingType} = data;

        await connectToDB();
        // const user = await User.findById(_id).exec();

        const {price} = await Vehicle.findById(vehicleId).select('price').exec();
        // console.log(price);

        let amount = 1;

        if (bookingType === 'monthly') {
            amount = calcMonthlyPrice(pickingDate, droppingDate, price.monthly);
        } else if (bookingType === 'weekly') {
            amount = calcWeeklyPrice(pickingDate, droppingDate, price.weekly);
        } else if (bookingType === 'daily') {
            amount = calcDailyPrice(pickingDate, droppingDate, price.daily);
        } else {
            amount = calcHourlyPrice(pickingDate, droppingDate, price.hourly);
        }

        // console.log('amount ->', amount);

        const finalAmount = (amount*100);

        const instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })

        const option = {
            amount: finalAmount,
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'),
        } 

        const order = await instance.orders.create(option);
        // console.log(order);

        return new Response(JSON.stringify({success: true, total: amount, payable: amount, data: order}), { status: 200 });
        
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({success: false, message: "Failed to make payment!"}), { status: 500 });
    }
}




