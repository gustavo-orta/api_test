// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/usuarios', function (request, reply) {
    reply.send({ name: 'jhon' })
  })

  fastify.get('/usuarios/1', function (request, reply) {
    reply.send({ name: 'gustavo' })
  })


  fastify.post('/usuarios', function (request, reply) {
    reply.send({ name: 'jhon' })
  })

  fastify.delete('/usuarios', function (request, reply) {
    reply.send({ name: 'jhon' })
  })
  
  // Run the server!
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })