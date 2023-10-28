import User from "@/models/user"
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const {params} = res;
        const response = await User.findOne({email: params.email}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch user!", { status: 500 });
    }
}