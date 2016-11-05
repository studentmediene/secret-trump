import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Party } from '../../../both/models/party.model';

//noinspection TypeScriptCheckImport
import template from './app.component.html';

@Component({
    selector: 'app',
    template
})

export class AppComponent{
    hostId: string = '652923';
    parties: Observable<Party[]>;

    constructor() {

    }

}