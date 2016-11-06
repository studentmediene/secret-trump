import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { Players } from '../../../../both/collections/players.collection.ts';
import { Player } from '../../../../both/models/player.model.ts';

@Injectable()
export class GameService {

    getGameId(): string {
        // TODO: Dummy-data
        return '666'
    }

    getPlayersList(): Observable<Player[]>{
        return Players.find({});
    }

}
