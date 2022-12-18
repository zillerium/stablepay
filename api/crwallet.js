import * as dotenv from 'dotenv';
dotenv.config()
const apiKeyUsdc = process.env.API_KEY_USDC;
let bearerToken  = "Bearer " + apiKeyUsdc;
import fetch from  'node-fetch';

import {v4} from 'uuid'


let idempotencyKey = v4();

const url = 'https://api-sandbox.circle.com/v1/wallets';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: bearerToken
  },
  body: JSON.stringify({idempotencyKey: idempotencyKey})
};
console.log(options);
await main();

async function main() {
//    cwallet().then(m=> {
//        console.log(JSON.stringify(m));
//    });
      let m = await cwallet();
      console.log(JSON.stringify(m));
}

async function cwallet() {
    let res = await fetch(url, options);
    let wallet = await res.json();
    return wallet;
}
