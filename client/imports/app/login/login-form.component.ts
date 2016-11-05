import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Players } from '../../../../both/collections/players.collection';

//noinspection TypeScriptCheckImport
import template from './login-form.component.html';

@Component({
    selector: 'st-login-form',
    template
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            gameId: [ '', Validators.required ],
            username: [ '', Validators.required ]
        });
    }

    loginPlayer(): void {
        if (!this.loginForm.valid) {
            return;
        }

        Players.insert(this.loginForm.value);
        this.router.navigateByUrl('/lobby');
    }
}
