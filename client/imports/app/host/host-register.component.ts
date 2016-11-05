import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Games } from '../../../../both/collections/games.collection';
import { Game } from '../../../../both/models/game.model';

//noinspection TypeScriptCheckImport
import template from './host-register.component.html';

@Component({
    selector: 'st-host-register',
    template
})
export class HostRegisterComponent implements OnInit {
    gameId: string = '';
    gameStarted: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.gameId = this.generateRandomId();
        Games.insert({ gameId: this.gameId, started: false });

        Games.find({ gameId: this.gameId })
            .subscribe((games: Game[]) => {
                if (games[0].started) {
                    this.gameStarted = true;

                    setTimeout(() => {
                        this.router.navigate([ `/host/${this.gameId}` ]);
                        //this.router.navigate(['host', this.gameId]);
                    }, 3000);
                }
            });
    }


    private generateRandomId(): string {
        let randNum: number = Math.floor(Math.random() * 1000000) + 1;
        let randId: string = String(randNum);
        randId = randId.length < 6 ? '0' + randId : randId;
        return String(randId);
    }

}
