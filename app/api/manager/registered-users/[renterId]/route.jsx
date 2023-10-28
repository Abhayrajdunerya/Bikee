import Renter from "@/models/renter";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {

        const {params} = res;

        // console.log(params);

        await connectToDB();

        const response = await Renter.findById(params.renterId)
        .populate({ path: 'user', model: User })
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
        // return new Response(JSON.stringify({response: 'ok'}), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch renter!", { status: 500 });
    }
}