import { IGame, Location } from '../types';
import description from './OldTemple.html?raw';
import { Start } from './start';

export function OldTemple() {
	return Location({
		name: 'OldTemple',
		description: description,
		destinations: [
			{
				name: 'Start',
				target: Start
			},
		]
	});
}