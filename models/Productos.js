const mongoose = require("mongoose");
const productosSchema = new mongoose.Schema(
	{
		title: { type: String },
		price: { type: String },
		thumbnail: { type: String },
	},
	{ timestamps: true }
);

const Productos = mongoose.model("productos", productosSchema);

module.exports = Productos;