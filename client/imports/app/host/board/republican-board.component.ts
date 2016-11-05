import { Component } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './republican-board.component.html';
//noinspection TypeScriptCheckImport
import style from './all-boards.component.scss';

@Component({
    selector: 'st-republican-board',
    template,
    styles: [ style ]
})
export class RepublicanBoardComponent {
    board = [
        {active: false, label:``},
        {active: false, label: `The Head of Congress investigates a player's identity card`},
        {active: false, label: `The Head of Congress picks the next presidential candidate`},
        {active: false, label: `The Head of Congress must kill a player`},
        {active: false, label: `The Head of Congress must kill a player`, unlocks: `Veto is unlocked`},
        {active: false, label: 'Victory!'}];



}
