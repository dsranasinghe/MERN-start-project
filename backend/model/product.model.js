import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {   // name of the product
    type: String,  // data type is string
    required: true,  // required field
    },
    price: {
    type: Number,  // data type is number
    required: true,  // required field
    },
    image: {
    type: String,  // data type is string
    required: true,  // required field
    },
},
{
  timestamps: true,  // timestamps for created and updated
}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
