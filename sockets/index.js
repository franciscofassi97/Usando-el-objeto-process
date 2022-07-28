const definirContenedor = require('../daos');
const normalizarMensaje = require("../Normalizer");

module.exports = (server) => {
	const { Server: IoServer } = require("socket.io");
	const ioSocket = new IoServer(server);

	ioSocket.on("connection", async (socket) => {
		console.log("New cliente connected");

		//Contenedores
		const contenedorProductos = await definirContenedor("productos");
		const contenedorMensajes = await definirContenedor("mensajes");

		//Emitit eventos de sockets para visualizacion de datos en el cliente
		socket.emit("leerProductos", await contenedorProductos.getAllData());
		socket.emit("leerMensajes", normalizarMensaje(await contenedorMensajes.getAllData()));

		//Prodcutos 
		socket.on("agregarProducto", async (producto) => {
			const idProducto = await contenedorProductos.save(producto);
			if (idProducto) ioSocket.sockets.emit("leerProductos", await contenedorProductos.getAllData());
		})

		//Chat
		socket.on("agregarMensaje", async (mensaje) => {
			const idMensaje = await contenedorMensajes.save(mensaje);
			const mensajesNormalizado = normalizarMensaje(await contenedorMensajes.getAllData());
			if (idMensaje) ioSocket.sockets.emit("leerMensajes", mensajesNormalizado);
		})
	})
};