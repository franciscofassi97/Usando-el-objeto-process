const yargs = require('yargs');

const argumentos = process.argv.slice(2);
const parsear = yargs(argumentos).default({
  port: 8080,
}).alias({
  p: 'port',
}).argv;

module.exports = parsear;