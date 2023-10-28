import Renter from "@/models/renter"
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

export const GET = async (req, res) => {
    try {

        const session = await getServerSession(options)
        const email = session?.user?.email
        const _id = session?.user?.id;

        await connectToDB();

        const response = await Renter.findOne({user: _id})
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch renter!", { status: 500 });
    }
}