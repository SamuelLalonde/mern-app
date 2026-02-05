import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: True
    },
    price:{
        type: Number,
        required: True
    },
    image: {
        type: String,
        required: True
    },
}, { 
    timestamps: true //created at, updated at
}); 

const Product = mongoose.model('Product', productSchema);

export default Product;

