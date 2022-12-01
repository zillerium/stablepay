import { createRequire } from "module";
const require = createRequire(import.meta.url);

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
//const apiSecret = process.env.API_SECRET;

require('dotenv').config();

const apiKeyUsdc = process.env.API_KEY_USDC;
console.log("api == " + process.env.API_KEY_USDC);
let bearerToken  = "Bearer " + apiKeyUsdc;
// 👇️ "/home/john/Desktop/javascript"r
const __dirname = path.dirname(__filename);
const fetch = require('node-fetch');
// Authorization: Bearer ${key1}"

const url = 'https://api-sandbox.circle.com/v1/stablecoins';
const options = {method: 'GET', 
	        headers: {
			    accept: 'application/json',
			    authorization: bearerToken
		         }
                };
console.log("opts = " + JSON.stringify(options));
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)))
  .catch(err => console.error('error:' + err));
