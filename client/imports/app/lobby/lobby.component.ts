import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Games } from '../../../../both/collections/games.collection';
import { Game } from '../../../../both/models/game.model';

import template from './lobby.component.html';

@Component({
    template
})

export class LobbyComponent implements OnInit{

    game: Game;

    constructor(
        private route : ActivatedRoute,
        private router : Router
    ) {};

    startGame() {
        Games.update(
            this.game._id,
            {$set: {started: true}}
        );
    }

    updateGame(gameId) {
        this.game = Games.findOne({gameId});
    }

    ngOnInit() : void {
        const gameId = this.route.params
            .map(p => p['gameId'])
            .subscribe(gameId => updateGame);
    }

};
