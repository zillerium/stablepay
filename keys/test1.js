
import {v4} from 'uuid'

//const {v4: uuidv4} = pkg;

main();


function main() {

	let idempotencyKey = v4();

	console.log("id key - " + idempotencyKey);

}
