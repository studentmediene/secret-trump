import { MongoObservable } from 'meteor-rxjs';

import { Election } from '../models/election.model';

export const Elections = new MongoObservable.Collection<Election>('elections');
