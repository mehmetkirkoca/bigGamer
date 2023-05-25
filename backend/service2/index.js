const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  reply.send({rsp:'service2'});
});

fastify.listen(3000, 'service2', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Service2 working on ${address}`);
});
