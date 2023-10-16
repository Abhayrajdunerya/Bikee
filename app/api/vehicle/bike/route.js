import { connectToDB } from "@/utils/database";
import Bike from "@/models/bike";
import slugufy from 'slugify'

// export const GET = async (req) => {
//     try {
//         await connectToDB();

//         const prompts = await Bike.find({});

//         return new Response(JSON.stringify(prompts), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch bike", { status: 500 });
//     }
// }

export const GET = async (req) => {
    try {
        await connectToDB();
    } catch (error) {
        return new Response("Failed to add a new bike", { status: 400 })
    }
}

export const POST = async (req) => {
    const { brand, model, mfYear, fuel, engineCap, startType, images, bikeNumber, owner } = await req.json();
    
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })


        const result = await Bike.create({
            brand: brand,
            model: model,
            mfYear: mfYear,
            fuel: fuel,
            engineCap: engineCap,
            startType: startType,
            bikeNumber: bikeNumber,
            images: images,
            slug: slugufy(brand+'-'+model+'-'+mfYear+'-'+bikeNumber),
            owner: owner,
        })

        return new Response(JSON.stringify(result), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new bike", { status: 500 })
    }
}

export const PUT = async (req) => {
    try {
        await connectToDB();
    } catch (error) {
        return new Response("Failed to update bike", { status: 500 })
    }
}