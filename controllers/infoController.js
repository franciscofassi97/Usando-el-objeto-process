const args = require('../yargs')

const recuperarInfo = (_, res) => {
  const info = {
    args: args,
    sistema: process.platform,
    nodeVersion: process.version,
    memory: process.memoryUsage.rss(),
    path: process.cwd(),
    processId: process.pid,
    file: __dirname
  }


  info.keys = Object.keys(info.args)
  console.log({ info: info })
  res.render("info", { info: info })
}
module.exports = { recuperarInfo }