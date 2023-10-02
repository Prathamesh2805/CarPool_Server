import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ofruwmv-shard-00-00.ybifbip.mongodb.net:27017,ac-ofruwmv-shard-00-01.ybifbip.mongodb.net:27017,ac-ofruwmv-shard-00-02.ybifbip.mongodb.net:27017/CARPOOL?ssl=true&replicaSet=atlas-b12wcg-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true });
       console.log("Database connected Successfully!")
    }catch(error){
        console.log("Error while connection", error);
    }
}

export default Connection;