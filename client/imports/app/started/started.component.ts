import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { Players } from '../../../../both/collections/players.collection';
import { Player } from '../../../../both/models/player.model';
import { Elections } from '../../../../both/collections/elections.collection';
import { Election } from '../../../../both/models/election.model';

import template from './started.component.html';

@Component({
    selector: 'started',
    template
})

export class StartedComponent implements OnInit {
    election : Election;
    hideRole: boolean;
    hideTrump: boolean;
    hideTeam: boolean;

    constructor(
        private route : ActivatedRoute
    ) {
        this.hideRole = true;
        this.hideTeam = false;
        this.hideTrump = false;
    }

    clickedRole(event) {
        this.hideRole = !this.hideRole;
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

    }
}
