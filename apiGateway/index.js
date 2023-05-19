const fastify = require('fastify')();
const axios = require('axios');

fastify.get('/service1', async (request, reply) => {
  try {
    const response = await axios.get('http://service1:3000');
    reply.send(response.data);
  } catch (error) {
    reply.status(500).send({ error: JSON.stringify(error) });
  }
});

fastify.get('/service2', async (request, reply) => {
  try {
    const response = await axios.get('http://service2:3000');
    reply.send(response.data);
  } catch (error) {
    reply.status(500).send({ error: JSON.stringify(error) });
  }
});

fastify.listen(8083, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
