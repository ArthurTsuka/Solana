require('dotenv').config();

import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import { Keypair} from "@solana/web3.js";

// console.log(process.env.SECRET_KEY);

// Gerando uma Wallet

// const keypair = Keypair.generate();

// console.log(`Public Key: `, keypair.publicKey.toBase58());
// console.log(`Private Key: `, keypair.secretKey);

// utilizando uma Wallet ja existindo, armazenada no arquivo env.

// const secret = process.env.SECRET_KEY;

const keyPair = await getKeypairFromEnvironment("SECRET");

console.log(keyPair.publicKey);


