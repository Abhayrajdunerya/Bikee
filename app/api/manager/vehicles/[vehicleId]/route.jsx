import Vehicle from "@/models/vehicle"
import { connectToDB } from "@/utils/database";



export const PUT = async (req, res) => {
    try {

        const {params} = res;
        const data = await req.json();
        await connectToDB();
        
        const response = await Vehicle.findByIdAndUpdate(params.vehicleId, data);

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
        // return new Response(JSON.stringify({hello: 'hello'}), {status: 200});
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to update vehicle!", { status: 500 });
    }
}

export const DELETE = async (req, res) => {
    try {
        await connectToDB();
        const {params} = res;

        const response = await Vehicle.findByIdAndDelete(params.vehicleId);

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
        // return new Response(JSON.stringify({hello: 'hello'}), {status: 200});
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to delete vehicle!", { status: 500 });
    }
}