require('dotenv').config();
const fastify = require('fastify')();
const Web3 = require('web3');

async function createAccount() {
  var web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
  return web3.eth.accounts.create();
}

// todo wallets will integrate
// Metamask
// Fortmatic
// WalletConnect
// Coinbase Wallet
// MyEtherWallet

fastify.get('/', async (request, reply) => {
  reply.send({ ok:'wallet service working' });
});

fastify.get('create-eth-wallet', async (request, reply) => {
  let account = await createAccount();
  reply.send({ account });
});

fastify.listen(3000, 'wallet', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`wallet working on ${address}`);
});