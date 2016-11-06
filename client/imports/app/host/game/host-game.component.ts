import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Players } from '../../../../../both/collections/players.collection';
import { Player } from '../../../../../both/models/player.model';
import { Elections } from '../../../../../both/collections/elections.collection';
import { Election } from '../../../../../both/models/election.model';

//noinspection TypeScriptCheckImport
import template from './host-game.component.html';

@Component({
    selector: 'st-host-game',
    template,
    styles: [`
        section {
            width: 60em;
        }
    `]
})
export class HostGameComponent implements OnInit, OnDestroy{
    gameId: string;
    private sub: any;

    currentRound = 1;
    players: Player[];
    president: Player;
    headOfCongress: Player;

    election: Election;
    voting: boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit():void {
        this.sub = this.route.params.subscribe((params) => {
            this.gameId = params['id'];

            this.playGame(this.gameId);
        });

    }


    playGame(gameId) {
        Elections.find({gameId}).subscribe((elects: Election[]) => {
                const elect = elects[this.currentRound-1];
                this.voting = elect.state === 'voting';
                this.election = elect;
                this.currentRound++;
            });
    }



    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

}
