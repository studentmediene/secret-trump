import { Component, OnInit } from '@angular/core';

import { Games } from '../../../../both/collections/games.collection';
import { Game } from '../../../../both/models/game.model';
import { Players } from '../../../../both/collections/players.collection';

//noinspection TypeScriptCheckImport
import template from './host-register.component.html';

@Component({
    selector: 'st-host-register',
    template
})
export class HostRegisterComponent implements OnInit{
    gameId: string = '';

    constructor() {}

    ngOnInit(): void {
        this.gameId = this.generateRandomId();
        Games.insert({gameId: this.gameId});

        Games.find({gameId: this.gameId})
            .subscribe((data:Game[]) => {
                
            });
    }

    private generateRandomId(): string {
        let randNum: number = Math.floor(Math.random()*1000000)+1;
        let randId: string = String(randNum);
        randId = randId.length < 6 ? '0' + randId : randId;
        return String(randId);
    }

}
