import Ride from '../schema/ride-schema.js'

export const addRide = async (request, response) => {
    const ride = request.body;

    const newRide = new Ride(ride);  

    try{
        await newRide.save();
        response.status(201).json(newRide);
    }catch (error){
        response.status(409).json({message: error.message})
    }

}
