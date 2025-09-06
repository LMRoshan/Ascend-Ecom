// import mongoose from "mongoose";
// const dbURL = 'mongodb+srv://roshan:roshan497@acsend.tw7etwf.mongodb.net/?retryWrites=true&w=majority&appName=acsend';

// const connectDB = () => {
//     mongoose.connect(dbURL)
//         .then(() => console.log('DB connected'))
//         .catch(err => console.log(err));    
//     }       
    
// export default connectDB

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.dbURL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;