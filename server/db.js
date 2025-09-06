import mongoose from "mongoose";
const dbURL = 'mongodb+srv://roshan:roshan497@acsend.tw7etwf.mongodb.net/?retryWrites=true&w=majority&appName=acsend';

const connectDB = () => {
    mongoose.connect(dbURL)
        .then(() => console.log('DB connected'))
        .catch(err => console.log(err));    
    }       
    
export default connectDB