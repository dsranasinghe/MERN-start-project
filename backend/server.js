import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import  Productroutes from './routes/product.route.js';
import path from 'path';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // Allows Express to parse JSON requests

app.use('/api/products' , Productroutes); 

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


connectDB();
app.listen(PORT, () => {
    console.log('Server started at http://localhost:'+PORT);
});