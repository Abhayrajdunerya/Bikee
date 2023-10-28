import NewUserRequest from "@/models/newUserRequest"
import Renter from "@/models/renter";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
    try {
        await connectToDB();

        const {reqId, user, center} = await req.json();

        // console.log(reqId);
        // console.log(user);
        // console.log(center);

        const deleteResponse = await NewUserRequest.findByIdAndDelete(reqId).exec();
        
        const createResponse = await Renter.create({user: user._id, center})
        
        const roleUpdateRes = await User.findByIdAndUpdate(user._id, {
            role: 'renter'
        })

        // console.log(response);
        
        return new Response(JSON.stringify(createResponse), {status: 200});
        // return new Response(JSON.stringify({hello: 'hello'}), {status: 200});
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to verify user!", { status: 500 });
    }
}