import Vehicle from "@/models/vehicle"
import Center from "@/models/center";
import Renter from "@/models/renter";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";
import Order from "@/models/order";

export const POST = async (req, res) => {
    try {

        const {filterParams} = await req.json();

        // console.log(filterParams);

        // const session = await getServerSession(options)
        // const email = session?.user?.email
        // const _id = session?.user?.id;

        // const user = await User.findById(_id);
        await connectToDB();

        const centerIdsInCity = await Center.find({'address.city': filterParams.city})
        .select('_id')
        .exec();

        const centerIds = centerIdsInCity.map(center => center._id.toString());
        // console.log(centerIds);

        const renterIdsInCity = await Renter.find({
            center: {
                $in: centerIds
            }
        })
        .select('_id')
        .exec();


        const renterIds = renterIdsInCity.map(renter => renter._id.toString());
        // console.log(renterIds);
        
        
        const rentedVehicleIds = await Order.find({
            orderStatus: { 
                $in: ["booked", "not processed"] 
            },
            center: {
                $in: centerIds
            }
        })
        .select('vehicle')
        .exec();
        
        const vehicleIds = rentedVehicleIds.map(vehicle => vehicle.vehicle.toString());
        // console.log(vehicleIds);

        const response = await Vehicle.find({
            _id: {
                $nin: vehicleIds
            },
            owner: {
                $in: renterIds
            },
            vehicleType: filterParams.vehicleType
        })
        .populate({
            path: 'owner',
            model: Renter,
            populate : {
                path : 'center',
                model: Center
            }
        })
        .exec();
        
        return new Response(JSON.stringify(response), {status: 200});
        // return new Response(JSON.stringify(rentedVehicleIds), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch available!", { status: 500 });
    }
}