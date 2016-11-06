import { Component, Input } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './host-vote.component.html';
import { Election } from '../../../../../both/models/election.model';

@Component({
    selector: 'st-host-vote',
    template
})
export class HostVoteComponent {
    _election:Election;
    @Input()
    set election(elect: Election) {
        this._election = elect;
    }
    get election() {
        return this._election;
    }
}
