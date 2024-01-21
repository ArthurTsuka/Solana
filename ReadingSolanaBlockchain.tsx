// 1 Sol = 1 Bilhão de Lamports

import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

// Conectando na devnet

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`Connected`);

// Lendo info da rede

// Public Key de uma Wallet
const address = new PublicKey('EjeLUTn279s62aKkxjhrr8Q6FQrcczhpHYVQfDgA8NoN');

// Balanço da wallet em LAMPORTS
const balance = await connection.getBalance(address);

// Balanço da wallet em Sol
const balanceInSol = balance / LAMPORTS_PER_SOL;


console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`The balance of the account at ${address} is ${balanceInSol} Sol`);
console.log(`Finished`);