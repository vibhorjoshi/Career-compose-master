// walletService.ts
import { AptosClient, AptosAccount, FaucetClient } from 'aptos';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';
const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com';

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

export const createAccount = async () => {
  const account = new AptosAccount();
  await faucetClient.fundAccount(account.address(), 100_000_000); // Fund with test tokens
  return account;
};

export const getBalance = async (address: string) => {
  const resources = await client.getAccountResources(address);
  const accountResource = resources.find((r) => r.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>');
  return accountResource?.data?.coin.value;
};
