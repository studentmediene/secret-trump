import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Players } from '../../../../both/collections/players.collection';
import { Player } from '../../../../both/models/player.model';

//noinspection TypeScriptCheckImport
import template from './active-players.component.html';
//noinspection TypeScriptCheckImport
import style from './active-players.component.scss';

@Component({
    selector: 'st-active-players',
    template,
    styles: [ style ]
})
export class ActivePlayersComponent {
    activePlayers: Observable<Player[]>;

    _hostId:string;
    @Input('gameId')
    set hostId(id: string) {
        this._hostId = id;
        // Filter active users by their selected gameId
        this.activePlayers = Players.find({gameId: id}).zone();
    }
    get hostId() {
        return this._hostId;
    }

}