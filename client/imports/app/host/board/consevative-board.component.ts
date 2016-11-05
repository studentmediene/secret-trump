import { Component } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './conservative-board.component.html';
//noinspection TypeScriptCheckImport
import style from './all-boards.component.scss';

@Component({
    selector: 'st-conservative-board',
    template,
    styles: [ style ]
})
export class ConservativeBoardComponent {
    board = [null, null, null, null, null, {victory: true, label: 'Hillary for president!'}];


}
