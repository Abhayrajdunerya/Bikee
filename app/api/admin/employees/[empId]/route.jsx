import Employee from "@/models/employee"
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const {params} = res;
        const response = await Employee.findById(params.empId)
        .populate('user')
        .populate('center')
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch employee!", { status: 500 });
    }
}

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();

        const response = await Employee.findByIdAndRemove(params.empId)
        .populate('user')
        .populate('center')
        .exec();;

        return new Response(JSON.stringify(response), { status: 500 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to remove employee!", { status: 500 });
    }
}

export const PUT = async (req, res) => {
    try {
        const {params} = res;
        await connectToDB();
        const {user, position, center} = await req.json();
        const response = await Employee.findByIdAndUpdate(params.empId, {user, position, center}, {new: true})
        .populate('user')
        .populate('center')
        .exec();

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to update employee!", {status: 500});
    }
}