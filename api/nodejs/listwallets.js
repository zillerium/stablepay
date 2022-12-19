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

	let wallets = await getWallets();
	console.log(""+ JSON.stringify(wallets));
}

async function getWallets() {

    let res = await fetch(url, options);
    let wallets = await res.json();
    return wallets;


}
