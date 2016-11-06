import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { Players } from '../../../../both/collections/players.collection';
import { Player } from '../../../../both/models/player.model';
import { Elections } from '../../../../both/collections/elections.collection';
import { Election } from '../../../../both/models/election.model';
import { GameService } from '../services/game.service';

import template from './started.component.html';

@Component({
    selector: 'started',
    template
})

export class StartedComponent implements OnInit, OnDestroy {
    election : Election;
    player : Player;

    disposable : any;

    hideRole: boolean;
    hideTrump: boolean;
    hideTeam: boolean;

    constructor(
        private route : ActivatedRoute,
        private gameService : GameService
    ) {
        this.hideRole = true;
        this.hideTeam = false;
        this.hideTrump = false;
    }

    clickedRole(event) {
        this.hideRole = !this.hideRole;
    }

    selectCards(cards) {
        if (!this.election) {
            return;
        }

        Elections.update(this.election._id, {$set: {cards}});
    }

    ngOnInit() : void {

        // Fetch up-to-date election
        this.route.params
            .map(p => p['gameId'])
            .switchMap((gameId : string) => {
                return Elections.find(
                    {gameId}, {sort: {electionId: -1}, limit: 1}
                );
            })
            .map((item : Election[]) => item.length ? item[0] : null)
            .zone()
            .subscribe((item : Election) => {
                this.election = item;
            });

        // Fetch current player
        this.disposable = Players
            .find(this.gameService.activePlayerId)
            .zone()
            .subscribe((players : Player[]) => {
                if (players.length) {
                    this.player = players[0];
                }
            });
    }

    ngOnDestroy() : void {
        this.disposable.unsubscribe();
    }
}
