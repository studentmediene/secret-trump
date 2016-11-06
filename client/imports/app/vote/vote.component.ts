import { Component, Input } from '@angular/core';

import { Elections } from '../../../../both/collections/elections.collection';
import { Election } from '../../../../both/models/election.model';
import { Player } from '../../../../both/models/player.model';

import { GameService } from '../services/game.service';

//noinspection TypeScriptCheckImport
import template from './vote.component.html';
//noinspection TypeScriptCheckImport
import style from './vote.component.scss';
@Component({
    selector: 'st-vote',
    template,
    styles: [ style ],
    providers: [ GameService ]
})
export class VoteComponent {

    @Input() election : Election;

    constructor(
        private gameService: GameService
    ) {}

    /**
     * Register a vote.
     */
    private vote(vote: boolean) : void {
        const playerId = this.gameService.activePlayerId;
        Elections.update(
            this.election._id,
            {$set: {[`votes.${playerId}`]: vote}}
        );
    }

    /**
     * Check whether this user has voted.
     */
    private hasVoted() : boolean {
        const playerId = this.gameService.activePlayerId;
        return typeof this.election.votes[playerId] != 'undefined';
    }
}
