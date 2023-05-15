const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  reply.send({service :"service 1"});
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
