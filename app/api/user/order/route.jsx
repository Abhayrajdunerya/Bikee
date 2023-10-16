import Order from "@/models/order"
import { connectToDB } from "@/utils/database";
import { useSession } from "next-auth/react";

const {data:session} = useSession();

const email = session?.user?.email;
const _id = session?.user?.id;

export const GET = async (req) => {
    try {
        await connectToDB();
        const response = await Center.find({}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch centers", { status: 500 });
    }
}
// TODO
export const POST = async (req) => {
    try {
        await connectToDB();
        const { razorpayResponse, vehicle } = await req.json();

        const response = await Order.create({vehicle, paymentIntent: razorpayResponse, orderedBy: _id});
        return new Response(JSON.stringify(response), {status: 200});


    } catch (error) {
        console.log(error);
        return new Response("Failed to create center", { status: 500 });
    }
}