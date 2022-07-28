const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema(
	{
		nombre: { type: String },
		apellido: { type: String },
		edad: { type: Number },
		alias: { type: String },
		avatar: { type: String },
		mail: { type: String },
	});

module.exports = autorSchema;