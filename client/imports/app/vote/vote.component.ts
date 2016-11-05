import { Component, OnInit } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './vote.component.html';

@Component({
    selector: 'st-vote',
    template
})

export class VoteComponent implements OnInit {

    constructor() {}

    ngOninit() {
    }

    private vote(vote: boolean) {
        console.debug('vote = ' + vote);
        if (vote) {
        } else {
        }
    }

}
