import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Games } from '../../../../both/collections/games.collection';
import { Game } from '../../../../both/models/game.model';
import { Elections } from '../../../../both/collections/elections.collection';

import template from './lobby.component.html';

@Component({
    template
})

export class LobbyComponent implements OnInit, OnDestroy {

    game: Game;
    private gameSubscription : any;

    constructor(
        private route : ActivatedRoute,
        private router : Router
    ) {};

    startGame() {
        // Kickstart the first election
        Elections.insert({
            electionId: 1,
            gameId: this.game.gameId,
            state: 'select_candidate',
            /*headOfCongress: TODO, */
            votes: {},
            cards: []
        });

        // Start game
        Games.update(
            this.game._id,
            {$set: {started: true}}
        );
    }

    unsubscribe() : void {
        const subscription = this.gameSubscription;

        if (subscription) {
            subscription.unsubscribe();
        }
    }

    updateGame(gameId) : void {
        this.unsubscribe();

        this.gameSubscription = Games
            .find({gameId})
            .subscribe((games : Game[]) => {
                if (games.length == 0) {
                    this.game = null;
                } else {
                    this.game = games[0];

                    if (games[0].started) {
                        this.router.navigate(
                            ['/started', games[0].gameId]
                        );
                    }
                }
            });

    }

    ngOnInit() : void {
        this.route.params
            .map(p => p['gameId'])
            .subscribe(this.updateGame.bind(this));
    }

    ngOnDestroy() : void {
        this.unsubscribe();
    }

};
