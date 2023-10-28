import Vehicle from "@/models/vehicle"
import Order from '@/models/order'
import Employee from '@/models/employee'
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

export const POST = async (req, res) => {
    try {
        const session = await getServerSession(options)
        const {vehicleType} = await req.json();
        await connectToDB();

        const email = session?.user?.email
        const _id = session?.user?.id;

        const employee = await Employee.findOne({user: _id});

        // const response = await Order.find({orderStatus: 'booked', center: employee.center, vehicleType})
        // .populate({ path: 'vehicle', model: Vehicle })
        // .exec();

        const rentedVehicleIds = await Order.find({
            orderStatus: 'booked', 
            center: employee.center,
            vehicleType
        }).select('vehicle').exec();

        const vehicleIds = rentedVehicleIds.map(vehicle => vehicle.vehicle.toString());

        const response = await Vehicle.find({
            _id: {
                $in: vehicleIds
            }
        })

        return new Response(JSON.stringify(response), {status: 200});
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch rented vehicles!", { status: 500 });
    }
}