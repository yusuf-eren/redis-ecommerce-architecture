import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car1', {
		color: 'red',
		year: 1955
	});
	await client.hSet('car2', {
		color: 'white',
		year: 1951
	});
	await client.hSet('car3', {
		color: 'black',
		year: 1958
	});


	// PIPELINE
	const commands = [1, 2, 3].map((id) => {
		return client.hGetAll(`car${id}`);
	});
	
	const results = await Promise.all(commands);

	console.log(results);
};
run();
