import * as dotenv from 'dotenv';
dotenv.config()
const apiKeyUsdc = process.env.API_KEY_USDC;
let bearerToken  = "Bearer " + apiKeyUsdc;
import fetch from  'node-fetch';

import {v4} from 'uuid'

await main();

async function main() {
//    cwallet().then(m=> {
//        console.log(JSON.stringify(m));
//    });
      let idempotencyKey = v4();
      let jsonm = await cwallet(bearerToken, idempotencyKey);
      console.log(JSON.stringify(jsonm));
      if (jsonm && Object.keys(jsonm).length > 0) {
	      console.log("=== if statement === ");
          let walletid = jsonm.data.walletId;
	  let idkey = v4();
	  let address = await craddr(bearerToken, idkey, walletid);    
          console.log(JSON.stringify(address));
      }
}
// {"data":{"walletId":"1010799151","entityId":"b5a19958-1edf-43ab-aca4-f700950e96e5","type":"end_user_wallet","description":"Your payments end_user_wallet account","balances":[]}}

async function cwallet(bearerToken, idempotencyKey) {
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
    let res = await fetch(url, options);
    let wallet = await res.json();
    return wallet;
}

async function craddr(bearerToken, idempotencyKey, walletid) {
     
    const url = 'https://api-sandbox.circle.com/v1/wallets/'+ walletid + '/addresses';
    const options = {
       method: 'POST',
       headers: {
           accept: 'application/json',
                   'content-type': 'application/json',
           authorization: bearerToken
       },
       body: JSON.stringify({
         idempotencyKey: idempotencyKey,
         currency: 'USD',
         chain: 'ETH'
       })
   };
    console.log("new call == " +options);
    let res = await fetch(url, options);
    let address = await res.json();
    return address;
}


