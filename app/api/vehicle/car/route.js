import { connectToDB } from "@/utils/database";
import Car from "@/models/car";
import slugufy from 'slugify'

export const GET = async (req) => {
    try {
        await connectToDB();
    } catch (error) {
        return new Response("Failed to add a new car", { status: 400 })
    }
}

export const POST = async (req) => {
    const { brand, model, mfYear, fuel, engineCap, startType, images, carNumber, owner } = await req.json();
    
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })


        const result = await Car.create({
            brand: brand,
            model: model,
            mfYear: mfYear,
            fuel: fuel,
            engineCap: engineCap,
            startType: startType,
            carNumber: carNumber,
            images: images,
            slug: slugufy(brand+'-'+model+'-'+mfYear+'-'+carNumber),
            owner: owner,
        })

        return new Response(JSON.stringify(result), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new car", { status: 500 })
    }
}

export const PUT = async (req) => {
    try {
        await connectToDB();
    } catch (error) {
        return new Response("Failed to update car", { status: 500 })
    }
}