import mongoose from "mongoose";
const dbURL = 'mongodb://127.0.0.1:27017/ascend';

const connectDB = () => {
    mongoose.connect(dbURL)
        .then(() => console.log('DB connected'))
        .catch(err => console.log(err));    
    }       
    
export default connectDB