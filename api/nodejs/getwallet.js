import * as dotenv from 'dotenv';
dotenv.config()


import fetch from 'node-fetch';
const apiKeyUsdc = process.env.API_KEY_USDC;
let bearerToken  = "Bearer " + apiKeyUsdc;

const url = 'https://api-sandbox.circle.com/v1/wallets';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: bearerToken
  }
};

//console.log("opts = "+ JSON.stringify(options));
await main();

async function main() {
        let walletid = '1010796634';
	let wallet = await getWallet(walletid);
	console.log(""+ JSON.stringify(wallet));
}

async function getWallet(walletid) {
    let url = 'https://api-sandbox.circle.com/v1/wallets/' + walletid;
    let res = await fetch(url, options);
    let wallet = await res.json();
    return wallet;


}
