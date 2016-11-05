import { MongoObservable } from 'meteor-rxjs';

import { Player } from '../models/player.model';

export const Players = new MongoObservable.Collection<Player>('players');