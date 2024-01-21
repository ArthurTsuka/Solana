require('dotenv').config();

import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

const suppliedToPubKey = process.argv[2] || null;

if (!suppliedToPubKey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}

const sender = await getKeypairFromEnvironment("SECRET");
const toPubkey = new PublicKey(suppliedToPubKey);
const LAMPORTS_TO_SEND = 5000;
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender],);

console.log(`Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}`)

console.log(`Transaction signature is ${signature}!`);