import { CollectionObject } from './collection-object.model';

import { Player } from './player.model';

export interface Election extends CollectionObject {
    electionId: number;
    gameId: string;
    state: string;
    headOfCongress?: Player;
    candidate?: Player;
    votes: { [_id: string]: boolean };
    cards: string[];
}
