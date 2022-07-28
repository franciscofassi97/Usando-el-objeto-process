const formProductos = (req, res) => {
	const nombreUsuario = req.user.email;
	res.render('formProducts', { nombreUsuario });
}

module.exports = { formProductos };