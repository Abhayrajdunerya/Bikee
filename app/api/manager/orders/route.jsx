import Order from "@/models/order"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Vehicle from "@/models/vehicle";
import User from "@/models/user";
import Center from "@/models/center";
import Employee from "@/models/employee";

export const GET = async (req) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        await connectToDB();
        const manager = await Employee.findOne({
            user: _id
        }).exec();

        const response = await Order.find({
            center: manager.center
        })
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
