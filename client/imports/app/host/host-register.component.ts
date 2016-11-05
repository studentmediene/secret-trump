import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import { Games } from '../../../../both/collections/games.collection';
import { Players } from '../../../../both/collections/players.collection';

//noinspection TypeScriptCheckImport
import template from './host-register.component.html';

@Component({
    selector: 'st-host-register',
    template
})
export class HostRegisterComponent implements OnInit{
    hostId: string = "582951";
    createGameForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.createGameForm = this.formBuilder.group({
            username: ['', Validators.required]
        });
    }

    createGame():void {
        if(this.createGameForm.valid) {

        }
    }
}