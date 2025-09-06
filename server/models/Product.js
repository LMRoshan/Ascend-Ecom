import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

const Product = mongoose.model("Product", productSchema);

export default Product
