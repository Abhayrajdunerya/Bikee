import Center from "@/models/center"
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const {params} = res;
        const response = await Center.find({"address.city": params.city}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(`Failed to fetch centers in ${params.city}!`, { status: 500 });
    }
}