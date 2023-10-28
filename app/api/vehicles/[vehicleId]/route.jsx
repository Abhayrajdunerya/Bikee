import Vehicle from "@/models/vehicle"
import Renter from "@/models/renter"
import Center from "@/models/center"


export const GET = async (req, res) => {
    try {

        const {params} = res;

        const response = await Vehicle.findById(params.vehicleId)
        .populate({
            path: 'owner',
            model: Renter,

            populate: {
                path: 'center',
                model: Center,
            }
        })
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch vehicle!", { status: 500 });
    }
}

