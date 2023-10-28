import User from "@/models/user"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

export const GET = async (req, res) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        await connectToDB();
        const response = await User.findById(_id).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch user!", { status: 500 });
    }
}


export const PUT = async (req, res) => {
    try {

        const session = await getServerSession(options)
        const name = session?.user?.name
        const email = session?.user?.email
        const image = session?.user?.image
        const _id = session?.user?.id;

        const {mobile, gender, address, aadhar, drivingLicense} = await req.json();

        await connectToDB();
        const response = await User.findByIdAndUpdate(_id, {
            mobile, gender, address, aadhar, drivingLicense
        }, {new: true}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to update user!", { status: 500 });
    }
}