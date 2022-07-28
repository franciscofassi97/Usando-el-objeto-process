const mongoose = require("mongoose");
const autorSchema = require("./Autor");

const mensajesSchema = new mongoose.Schema(
	{
		mensaje: { type: String },
		autor: { type: autorSchema, _id: true },
		date: { type: String },
	},
	{ timestamps: true }
);


const Mensajes = mongoose.model("mensajes", mensajesSchema);

module.exports = Mensajes;