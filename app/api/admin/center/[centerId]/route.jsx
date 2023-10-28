import Center from "@/models/center"
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const {params} = res;
        const response = await Center.findById(params.centerId).exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch centers!", { status: 500 });
    }
}

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();

        const response = await Center.findByIdAndRemove(params.centerId).exec();

        return new Response(JSON.stringify(response), { status: 500 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to delete center!", { status: 500 });
    }
}

export const PUT = async (req, res) => {
    try {
        const {params} = res;
        await connectToDB();
        const {name, email, mobile, address, location} = await req.json();
        const response = await Center.findByIdAndUpdate(params.centerId, {name, email, mobile, address, location}, {new: true}).exec();

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to update center!", {status: 500});
    }
}