import NewUserRequest from "@/models/newUserRequest"
import User from "@/models/user"
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDB();

        const {params} = res;

        // console.log(params);

        const response = await NewUserRequest.findById(params.reqId)
        .populate({ path: 'user', model: User })
        .exec()
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch request!", { status: 500 });
    }
}

// export const DELETE = async (req, res) => {
//     try {
//         await connectToDB();

//         const {params} = res;

//         const response = await NewUserRequest.findByIdAndDelete(params.reqId).exec();
        
//         return new Response(JSON.stringify(response), {status: 200});
//     } catch (error) {
//         console.log(error);
//         return new Response("Failed to delete request!", { status: 500 });
//     }
// }