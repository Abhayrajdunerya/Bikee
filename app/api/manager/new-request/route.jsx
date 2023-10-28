import NewUserRequest from "@/models/newUserRequest"
import User from "@/models/user";
import Employee from "@/models/employee";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

export const GET = async (req, res) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        await connectToDB();

        const employee = await Employee.findOne({user: _id});
        // console.log(employee);

        const response = await NewUserRequest.find({center: employee.center})
        .populate({ path: 'user', model: User })
        .exec();

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch new requests!", { status: 500 });
    }
}