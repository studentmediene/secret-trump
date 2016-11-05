import { MongoObservable } from 'meteor-rxjs';

import { Game } from '../models/game.model';

export const Games = new MongoObservable.Collection<Game>('games');