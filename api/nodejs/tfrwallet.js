import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

import {v4} from 'uuid';
let idKey = v4();
const apiKeyUsdc = process.env.API_KEY_USDC;
let bearerToken  = "Bearer " + apiKeyUsdc;
let fromWallet = '1010800016';
let toWallet = '1010799975';
/*
{
      "walletId": "1010800016",
      "entityId": "b5a19958-1edf-43ab-aca4-f700950e96e5",
      "type": "end_user_wallet",
      "description": "Your payments end_user_wallet account",
      "balances": [
        {
          "amount": "1.00",
          "currency": "USD"
        }
      ]
    },
    {
      "walletId": "1010799975",
      "entityId": "b5a19958-1edf-43ab-aca4-f700950e96e5",
      "type": "end_user_wallet",
      "description": "Your payments end_user_wallet account",
      "balances": []
    },
*/

const url = 'https://api-sandbox.circle.com/v1/transfers';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: bearerToken
  },
  body: JSON.stringify({
    source: {
      type: 'wallet',
      identities: [
        {
          addresses: [
            {
              line1: '100 Money Street',
              city: 'Boston',
              district: 'MA',
              postalCode: '01234',
              country: 'US'
            }
          ],
          name: 'Satoshi Nakamoto',
          type: 'individual'
        }
      ],
      id: fromWallet
    },
	  //  body: JSON.stringify({source: {type: 'wallet'}, destination: {type: 'wallet', id: '12345'}})

    destination: {
      type: 'wallet',
      id: toWallet
    },
    amount: {amount: '1', currency: 'USD'},
    idempotencyKey: idKey
  })
};

await main();

async function main() {
let res = await fetch(url, options);
	console.log(await res.json());

}
