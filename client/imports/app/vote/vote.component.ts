import { Component, OnInit } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './vote.component.html';
//noinspection TypeScriptCheckImport
import style from './vote.component.scss';
@Component({
    selector: 'st-vote',
    template,
    styles: [ style ]
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
