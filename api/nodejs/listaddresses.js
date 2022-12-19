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
        let walletid = '1010800016';
	let addresses = await getAddresses(walletid);
	console.log(""+ JSON.stringify(addresses));
}

async function getAddresses(walletid) {

    const url = 'https://api-sandbox.circle.com/v1/wallets/' + walletid + '/addresses';
    let res = await fetch(url, options);
    let addresses = await res.json();
    return addresses;


}



