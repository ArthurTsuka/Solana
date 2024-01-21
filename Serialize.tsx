// import * as borsh from '@coral-xyz/borsh';
// import * as web3 from '@solana/web3.js';

// const equipePlayerSchema = borsh.struct([
//     borsh.u8('variant'),
//     borsh.u16('playerId'),
//     borsh.u256('itemId')
// ])

// const buffer = Buffer.alloc(1000)
// equipePlayerSchema.encode({ variant: 2, playerId: 1435, Itemid: 737498}, buffer)

// const instructionBuffer = buffer.slice(0, equipePlayerSchema.getSpan(buffer))

// const endpoint = web3.clusterApiUrl('devnet');
// const connection = new web3.Connection(endpoint);
// const transaction = new web3.Transaction();

// const instruction = new web3.TransactionInstruction({
//     keys: [{
//         pubkey: player.publicKey,
//         isSigner: true,
//         isWritable: false,
//     }, 
//     {
//         pubkey: playerInfoAccount,
//         isSigner: false,
//         isWritable: true,
//     },
//     {
//         pubkey: web3.SystemProgram.programId,
//         isSigner: false,
//         isWritable: false,
//     }
//    ],
//    data: instructionBuffer,
//    programId: PROGRAM_ID
// })

// transaction.add(instruction)

// web3.sendAndConfirmTransaction(
//     connection,
//     transaction,
//     [(player)].then((txid) => {
//         console.log(`Transaction Submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
//     })
// )
