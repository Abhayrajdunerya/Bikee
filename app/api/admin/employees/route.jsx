import Employee from "@/models/employee"
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
    try {
        await connectToDB();
        const response = await Employee.find({})
        .populate('user')
        .populate('center')
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch employees", { status: 500 });
    }
}

export const POST = async (req) => {
    try {
        await connectToDB();
        const {user, position, center} = await req.json();
        const response = await Employee.create({user, position, center});
        const updateRes = await User.findByIdAndUpdate(user, {
            role: position
        })
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to add employee", { status: 500 });
    }
}