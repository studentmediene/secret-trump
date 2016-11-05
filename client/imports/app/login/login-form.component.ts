import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Players } from '../../../../both/collections/players.collection';

//noinspection TypeScriptCheckImport
import template from './login-form.component.html';
//noinspection TypeScriptCheckImport
import style from './login-form.component.scss';

@Component({
    selector: 'st-login-form',
    template,
    styles: [ style ]
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            gameId: [ '', Validators.required ],
            username: [ '', Validators.required ]
        });
    }

    loginPlayer(): void {
        if (this.loginForm.valid) {
            Players.insert(this.loginForm.value);
            this.loginForm.reset();
        }
    }
}