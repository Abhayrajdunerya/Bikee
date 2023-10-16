import Center from "@/models/center"
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
    try {
        await connectToDB();
        const response = await Center.find({}).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch centers", { status: 500 });
    }
}

export const POST = async (req) => {
    try {
        await connectToDB();
        const {email, mobile, address} = await req.json();
        const response = await Center.create({email, mobile, address});
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to create center", { status: 500 });
    }
}