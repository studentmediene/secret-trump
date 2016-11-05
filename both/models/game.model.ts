import { CollectionObject } from './collection-object.model';

import { Player } from './player.model';

export interface Game extends CollectionObject {
    gameId: string;
    host: Player;
}