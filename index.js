const server = require('./server')

const port = process.env.port || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
