require('dotenv').config();

import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';
import * as web3 from '@solana/web3.js'

const myKey = getKeypairFromEnvironment('SECRET');
const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

const transaction = new web3.Transaction();

const suppliedToPubKey = process.argv[2] || null;

const lamportsToSend = process.argv[3];

const amount: number = parseInt(lamportsToSend);

if (!suppliedToPubKey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}

if (!lamportsToSend) {
    console.log(`Please provide some Sol to the other wallet`)
    process.exit(2);
}

const myPubKey = new web3.PublicKey(myKey.publicKey);
const toPubkey = new web3.PublicKey(suppliedToPubKey);

const instruction = web3.SystemProgram.transfer({
    fromPubkey: myPubKey,
    toPubkey,
    lamports: amount * web3.LAMPORTS_PER_SOL

})

transaction.add(instruction)

const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [myKey],
)

console.log(`Foi transferido ${amount} Solanas para a wallet ${toPubkey}`);

console.log(`A hash da transação é ${signature}`);
