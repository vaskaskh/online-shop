import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './products.js';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.js'


dotenv.config();


connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//Routes

app.get("/",(req,res)=>{
    res.send(products)
})


app.use("/api/v1", userRoutes)



//Server
const PORT = process.env.PORT || 55000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`.underline)
})
