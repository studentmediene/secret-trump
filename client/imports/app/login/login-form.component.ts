import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Players } from '../../../../both/collections/players.collection';
import { Games } from '../../../../both/collections/games.collection';

//noinspection TypeScriptCheckImport
import template from './login-form.component.html';

@Component({
    selector: 'st-login-form',
    template
})
export class LoginFormComponent implements OnInit {
    error: string;
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
            this.error = "Please fill in both fields";
            return;
        }

        const game = Games.findOne({gameId: this.loginForm.value.gameId});

        if (!game) {
            this.error = "Invalid game pin :'(";
            return;
        }

        Players.insert(this.loginForm.value);
        this.router.navigateByUrl('/lobby');
    }
}
