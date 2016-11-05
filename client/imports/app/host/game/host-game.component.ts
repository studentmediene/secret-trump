import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Players } from '../../../../../both/collections/players.collection';
import { Player } from '../../../../../both/models/player.model';

//noinspection TypeScriptCheckImport
import template from './host-game.component.html';

@Component({
    selector: 'st-host-game',
    template
})
export class HostGameComponent implements OnInit, OnDestroy{
    gameId: string;
    private sub: any;

    players: Player[];
    president: Player;
    counselor: Player;
    voting: boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit():void {
        this.sub = this.route.params.subscribe((params) => {
            this.gameId = params['id'];

            this.playGame(this.gameId);
        });

    }

    playGame(gameId) {
        Players.find({ gameId })
            .subscribe((p: Player[]) => {
                
            });

    }


    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

}
