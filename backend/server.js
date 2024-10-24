import express from 'express';
import connectMongoDB from './db/connectMongoDb.js'
import authRoutes from './routes/auth.routes.js'; 
import dotenv from 'dotenv';
dotenv.config();
const app = express();
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;
app.use("/api/auth",authRoutes);
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})