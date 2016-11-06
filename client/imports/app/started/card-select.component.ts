import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Election } from '../../../../both/models/Election.model';

import template from './card-select.component.html';

@Component({
    selector: 'card-select',
    template
})
export class CardSelectComponent {

    @Input() cards : string[];
    @Output() select = new EventEmitter<string[]>();

    onSelect(card : string) : void {
        this.select.emit(
            this.cards
                .slice(0)
                .splice(this.cards.indexOf(card), 1)
        );
    }
};
