import mongoose from 'mongoose';
// how our document look like
const rideSchema = mongoose.Schema({
    currentlocation: String,
    destination: String,
    numberofpeople: String,
});



const ride =  mongoose.model('ride', rideSchema);

export default ride;
