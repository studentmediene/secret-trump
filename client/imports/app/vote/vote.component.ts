import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
export class VoteComponent implements OnInit {

    private gameId: string;
    private activePlayer: Player;

    private election: Election;
    private candidate: Player;

    constructor(private gameService: GameService) {}

    ngOnInit() {
        this.gameId = this.gameService.getGameId();
        console.debug('gameId = ' + this.gameId);

        let elections: Observable<Election[]> = Elections.find({gameId: this.gameId}).zone();
        elections.subscribe(
            (elections: Election[]) => {
                console.debug('elections:');
                console.log(elections);

                this.election = elections[elections.length - 1];
                this.candidate = this.election.candidate;
            }
        );
    }

    private vote(vote: boolean) {
        console.debug('vote = ' + vote);

        let newVotes = this.election.votes;
        newVotes[this.activePlayer.username] = vote;
        Elections.update({electionId: this.election.electionId}, {votes: newVotes})
    }

}
