import Order from "@/models/order"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import Vehicle from "@/models/vehicle";
import User from "@/models/user";
import Center from "@/models/center";

export const GET = async (req) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        await connectToDB();
        const response = await Order.find({orderedBy: _id})
        .populate({
            path: 'vehicle',
            model: Vehicle
        })
        .populate({
            path: 'orderedBy',
            model: User
        })
        .populate({
            path: 'center',
            model: Center
        })
        .exec();

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch orders", { status: 500 });
    }
}

// TODO
export const POST = async (req) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        const { razorpayResponse, vehicleId, bookingInfo, centerId } = await req.json();

        await connectToDB();

        const response = await Order.create({
            vehicle:vehicleId, 
            bookingInfo:bookingInfo,
            paymentIntent: razorpayResponse, 
            orderedBy: _id,
            center: centerId
        });

        return new Response(JSON.stringify({success: true, response}), {status: 200});

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({success: false, message: "Failed to create center"}), { status: 500 });
    }
}