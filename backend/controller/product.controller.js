import Product from '../model/product.model.js';
import mongo from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data:products });
    } catch (error) {
        console.error("Error in get products:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const createProduct =  async (req, res) => {
    const { name, price, image } = req.body; //  Extract fields directly

    if (!name || !price || !image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        //Pass extracted fields directly
        const newProduct = new Product({ name, price, image });  
        await newProduct.save();
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if( !mongo.Types.ObjectId.isValid(id) ) {
        return res.status(404).json({ success: false, message: 'Invalid product id' });
    }   

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product is deleted' });
    } catch (error) {
        console.error("Error in delete product:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }

};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    if( !mongo.Types.ObjectId.isValid(id) ) {
        return res.status(404).json({ success: false, message: 'Invalid product id' });
    }   

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in update product:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};