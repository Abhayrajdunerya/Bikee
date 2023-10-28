import Renter from "@/models/renter"
import User from "@/models/user";
import Employee from "@/models/employee";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

export const GET = async (req) => {
    try {

        const session = await getServerSession(options)
        await connectToDB();

        const email = session?.user?.email
        const _id = session?.user?.id;

        const employee = await Employee.findOne({user: _id});

        const response = await Renter.find({center: employee.center})
        .populate({ path: 'user', model: User })
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch new requests!", { status: 500 });
    }
}