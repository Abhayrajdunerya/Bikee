import Order from "@/models/order"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const PUT = async (req, res) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        const newStatus = await req.json();
        const {params} = res;

        await connectToDB();

        const response = await Order.findByIdAndUpdate(params.orderId, {
            orderStatus: newStatus
        }, {new: true}).exec();

        return new Response(JSON.stringify({success: true, response}), {status: 200});

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({success: false, message: "Failed to update status"}), { status: 500 });
    }
}