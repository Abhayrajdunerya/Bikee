import Employee from "@/models/employee"
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
    try {
        const centerId = await req.json();
        // console.log(centerId);
        await connectToDB();
        const response = await Employee.find({center: centerId})
        .populate('user')
        .populate('center')
        .exec();

        // console.log(response);
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch employees", { status: 500 });
    }
}