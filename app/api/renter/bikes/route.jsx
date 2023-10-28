import Vehicle from "@/models/vehicle"
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
    try {
        const {owner} = await req.json();
        await connectToDB();
        const response = await Vehicle.find({owner, vehicleType: 'bike'}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch renter's bike!", { status: 500 });
    }
}