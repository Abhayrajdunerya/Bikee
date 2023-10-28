import Vehicle from "@/models/vehicle"
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
    try {
        await connectToDB();

        const data = await req.json();

        // console.log(data);

        const response = await Vehicle.create(data);

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
        // return new Response(JSON.stringify({hello: 'hello'}), {status: 200});
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to add vehicle!", { status: 500 });
    }
}