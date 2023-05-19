const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  reply.send({rsp:'service1'});
});

fastify.listen(3000, 'service1', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
