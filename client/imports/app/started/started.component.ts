import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Players } from '../../../../both/collections/players.collection';
import { Player } from '../../../../both/models/player.model';

import template from './started.component.html';

@Component({
    selector: 'started',
    template
})

export class StartedComponent {

    hideRole: boolean;
    hideTrump: boolean;
    hideTeam: boolean;

    constructor() {
        this.hideRole = true;
        this.hideTeam = false;
        this.hideTrump = false;
    }

    clickedRole(event) {
        this.hideRole = !this.hideRole;
    }
}
