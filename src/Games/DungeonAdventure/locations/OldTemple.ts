import { IGame, Location } from '../types';
import description from './OldTemple.html?raw';
import { Start } from './start';

export function OldTemple() {
	return Location({
		name: 'Old ruins',
		description: description,
		destinations: [
			{
				name: 'Return to Camp',
				target: Start
			},
			{
				name: 'Look Around',
				target: null
			},
			{
				name: 'Listen',
				target: null
			},
		]
		
	});
}