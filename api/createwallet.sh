curl -H 'Content-type: application/json' \
	-H "Authorization: Bearer ${key1}" \
	-X GET --url https://api-sandbox.circle.com/v1/wallets \
	--data '{"idempotencyKey": ${idkey} }'
