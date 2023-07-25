import colors from 'colors';

import mongoose  from "mongoose";


export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{

        })

        console.log(`MongoDB Connected...`.rainbow)
    } catch (error) {
        console.error(error.message)
    }
}

