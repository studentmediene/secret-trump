import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Player } from '../../../../both/models/player.model';

import template from './player-select.component.html';

@Component({
    selector: 'player-select',
    template
})
export class PlayerSelectComponent {

    @Input() players : Observable<Player>;
    @Output() select : EventEmitter<Player>;

    onSelect(player : Player) : void {
        if (this.select && player) {
            this.select.emit(player);
        }
    }
};
