import NewUserRequest from "@/models/newUserRequest"
import { connectToDB } from "@/utils/database";
import { useSession } from "next-auth/react";

const {data:session} = useSession();

const email = session?.user?.email;
const _id = session?.user?.id;

// TODO
export const POST = async (req) => {
    try {
        await connectToDB();
        const { center } = await req.json();

        const response = await NewUserRequest.create({_id, center});
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to make center!", { status: 500 });
    }
}