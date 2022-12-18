curl --request POST \
     --url https://api-sandbox.circle.com/v1/businessAccount/wallets/addresses/deposit \
     --header 'accept: application/json' \
     --header 'authorization: Bearer xx' \
     --header 'content-type: application/json' \
     --data '
{
     "idempotencyKey": "xx",
     "chain": "ETH",
     "currency": "USD"
}
'
