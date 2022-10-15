import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950

		// This values are can not stored in redis
		// redis tries to convert it toString()
		// but Objects are not convertible to strings
		// so we are getting an error(invalid argument type)
		// owner: null || '',
		// service: undefined || ''
	});
	// HSET car color red year 1950

	const car = await client.hGetAll('car');

	if (Object.keys(car).length === 0) {
		console.log('Car not found, respond with 404');
		return;
	}
	console.log(car);
};
run();
