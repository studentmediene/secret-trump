import { Component, Input } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './host-vote.component.html';
//noinspection TypeScriptCheckImport
import style from './host-vote.component.scss';
import { Election } from '../../../../../both/models/election.model';
import { Player } from '../../../../../both/models/player.model';

@Component({
    selector: 'st-host-vote',
    template,
    styles: [ style ]
})
export class HostVoteComponent {
    _players: Player[];
    _election:Election;

    votes: Object[] = [];

    @Input()
    set election(elect: Election) {
        this._election = elect;

        this.checkVotes(this._players, elect);
    }
    get election() {
        return this._election;
    }

    @Input()
    set players(players: Player[]) {
        this._players = players;
        this.checkVotes(players, this._election);
    }
    get players() {
        return this._players;
    }

    checkVotes(players: Player[], election) {
        if (!players || !election){
            return;
        }

        this.votes = [];
        for (let user in election.votes) {

            this.votes.push({
                username: user,
                vote: election.votes[user]
            });
        }

    }

}
