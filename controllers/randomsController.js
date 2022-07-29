

const calcularRamdoms = (cantidad) => {

  let numeros = {}

  for (let i = 0; i < cantidad; i++) {
    const numeroRamdon = Math.floor(Math.random() * 1000 + 1)
    const numero = numeroRamdon.toString()

    if (numeros[numero]) {
      numeros[numero]++
    } else {
      numeros[numero] = 1
    }
  }

  return numeros
}


const randoms = (req, res) => {
  const cantidad = req.query.cantidad || "100";
  console.log(cantidad)

  process.on("message", (msg) => {
    const cantidad = parseInt(msg)
    console.log('mensaje q recibo', cantidad)
    const numbers = calcularRamdoms(cantidad);
    process.send(numbers)

  })

  process.on("message", (numbers) => {
    res.send(numbers)
  })

}
module.exports = { randoms }