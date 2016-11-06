import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Players } from '../../../../../both/collections/players.collection';
import { Player } from '../../../../../both/models/player.model';
import { Elections } from '../../../../../both/collections/elections.collection';
import { Election } from '../../../../../both/models/election.model';

//noinspection TypeScriptCheckImport
import template from './host-game.component.html';

@Component({
    selector: 'st-host-game',
    template,
    styles: [ `
        section {
            width: 60em;
        }
    ` ]
})
export class HostGameComponent implements OnInit, OnDestroy {
    gameId: string;
    private sub: any;

    currentRound = 1;
    players: Player[];
    deadPlayers: Player[];
    president: Player;
    headOfCongress: Player;

    election: Election;
    roundState: string;
    voting: boolean = false;
    voteComplete: boolean = false;
    approvedVotes: boolean = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.gameId = params[ 'id' ];

            this.playGame(this.gameId);
        });

    }

    playGame(gameId) {
        Elections.find({ gameId, electionId: this.currentRound })
            .subscribe((elects: Election[]) => {
                const [ elect ] = elects;
                this.checkState(elect);
            });
    }


    checkState(election) {
        let playerSub;
        const { gameId } = this;
        const { state, votes } = election;
        const voteCount = Object.keys(votes).length;
        this.election = election;
        this.roundState = state;

        switch (state) {
            case 'select_candidate':
                this.voting = true;
                playerSub.unsubscribe();
                break;
            case 'voting':
                this.voting = true;
                this.voteComplete = false;
                this.approvedVotes = false;

                //noinspection TypeScriptUnresolvedFunction
                playerSub = Players.find({gameId}, {sort: {username: 1}})
                    .zone()
                    .subscribe((players: Player[]) => {
                        this.players = players;
                        let updatedFields = {};


                        if (voteCount >= players.length) {
                            this.voteComplete = true;

                            if(this.candidateApproved(votes)){
                                this.approvedVotes = true;

                                updatedFields = {
                                    state: 'pick_cards'
                                };
                            } else {

                                updatedFields = {
                                    headOfCongress: this.getNextPlayer(
                                        players,
                                        this.election.headOfCongress),
                                    candidate: null,
                                    state: 'select_candidate'
                                };

                                //console.log(updatedFields);
                            }
                            //Elections.update({gameId}, {$set: updatedFields});
                        }

                    });

                break;
            case 'pick_cards':
                this.voting = false;
                playerSub.unsubscribe();
                break;
        }

        //this.currentRound++;
    }

    getNextPlayer(players, current: Player): Player {
        if (!players){ return current; }

        console.log(players[1]);
        const currentIndex = players.indexOf(current);
        if (currentIndex >= players.length-1){
            return players[0];
        } else {
            return players[currentIndex];
        }
    }

    candidateApproved(votes): boolean {
        let yesVoters = 0;
        for(const vote in votes) {
            if(votes[vote]){
                yesVoters += 1;
            }
        }
        return yesVoters > (Object.keys(votes).length/2);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
