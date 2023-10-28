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
        const {image} = await req.json();
        const result = await cloudinary.v2.uploader.upload(image, {
            public_id: `${Date.now()}`,
            resource_type: 'auto',
        });
    
        return new Response(JSON.stringify({
            public_id: result.public_id,
            url: result.secure_url,
        }), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to upload images", { status: 500 });
    }
}