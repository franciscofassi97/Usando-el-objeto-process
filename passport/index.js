const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Usuarios = require('../models/Usuarios');

passport.use('registro', new LocalStrategy(async (username, password, callback) => {
	const user = await Usuarios.findOne({ "email": username });
	if (user) return callback(null, false, { message: 'El usuario ya existe' });
	const newUser = new Usuarios({ "email": username, password })
	await newUser.save()
	callback(null, newUser);
}));


passport.use('login', new LocalStrategy(async (username, password, callback) => {
	const user = await Usuarios.findOne({ "email": username });
	if (!user || !await bcrypt.compareSync(password, user.password))
		return callback(null, false, { message: 'Usuario o contraseña incorrectos' });
	callback(null, user);
}));

passport.serializeUser((usuario, callback) => {
	callback(null, usuario._id || usuario.id);
});

passport.deserializeUser(async (id, callback) => {
	const usuario = await Usuarios.findById(id);
	callback(null, usuario);
});


module.exports = passport;