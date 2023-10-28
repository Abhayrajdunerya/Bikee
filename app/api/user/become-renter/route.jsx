import NewUserRequest from "@/models/newUserRequest"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";
import User from "@/models/user";

// TODO
export const POST = async (req, res) => {
    try {

        const session = await getServerSession(options)
        await connectToDB();

        const email = session?.user?.email
        const _id = session?.user?.id;

        const center = await req.json();

        // console.log('--->', session?.user);
        // console.log('--->', center);

        const reqExists = await NewUserRequest.find({
            user: _id
        }).exec();

        if (reqExists || reqExists.length > 0) {
            return new Response(JSON.stringify({profile: false, message: 'You have already requested!'}), {status: 200});
        }

        const user = await User.findById(_id).exec();

        if (!user.aadhar || !user.drivingLicense || !user.mobile || !user.address || !user.gender) {
            return new Response(JSON.stringify({profile: false, message: 'Complete your profile first!'}), {status: 200});
        } else {    
            const response = await NewUserRequest.create({user:_id, center:center});
            return new Response(JSON.stringify({profile: true, response}), {status: 200});
        }
    } catch (error) {
        console.log(error);
        return new Response("Failed to make request!", { status: 500 });
    }
}