import cloudinary from "cloudinary";
import { connectToDB } from "@/utils/database";

// config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req, res) => {
    try {
        await connectToDB();
        const {public_id} = await req.json();

        // cloudinary.v2.uploader.destroy(image_id, (err, result) => {
        //     if (err) {
        //         return new Response(JSON.stringify({
        //             success: false,
        //             message: "Failed to remove image",
        //             err
        //         }), { status: 500 });
        //     }

        //     return new Response(JSON.stringify({
        //         success: true,
        //         message: "Successfuly removed image",
        //     }), {status: 200});
        // })

        // cloudinary.v2.uploader.destroy(image_id)
        // .then((result) => {
        //     return new Response(JSON.stringify({
        //         success: true,
        //         message: "Successfuly removed image",
        //     }), {status: 200});
        // })
        // .catch(error => {
        //     return new Response(JSON.stringify({
        //         success: false,
        //         message: "Failed to remove image",
        //         error
        //     }), { status: 500 });
        // })
    
        // return new Response(JSON.stringify({
        //     success: true,
        //     message: "Successfuly removed image",
        // }), {status: 200});

        const response = await cloudinary.v2.uploader.destroy(public_id)

        return new Response(JSON.stringify({
            success: true,
            message: "Successfuly removed image",
        }), {status: 200});

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            success: false,
            message: "Failed to remove image",
            error
        }), { status: 500 });
    }
}