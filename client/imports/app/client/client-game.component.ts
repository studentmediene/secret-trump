import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteorComponent } from 'angular2-meteor';
import { Tracker } from 'meteor/tracker';
import { Observable } from 'rxjs/Observable';

import { Elections } from '../../../../both/collections/elections.collection';
import { Election } from '../../../../both/models/election.model';

import template from './client-game.component.html';


@Component({
    template
})
export class ClientGameComponent extends MeteorComponent implements OnInit {

    election : Election;

    constructor(
        private route : ActivatedRoute
    ) {
        super();

    };

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
};
