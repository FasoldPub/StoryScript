import { IGame, Location } from '../types';
import description from './OldTemple.html?raw';
import { Start } from './start';

export function OldTemple() {
	return Location({
		name: 'Old ruins',
		description: description,
		destinations: [
			{
				name: 'Camp',
				target: Start
			},
		]
	});
}