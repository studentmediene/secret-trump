import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LOGIN_DECLARATIONS } from './login';
import { PLAYER_DECLARATIONS } from './players';

import { LOBBY_DECLARATIONS } from './lobby';

import { VOTE_DECLARATIONS } from './vote';

import { HOST_DECLARATIONS } from './host';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...LOGIN_DECLARATIONS,
        ...PLAYER_DECLARATIONS,
        ...LOBBY_DECLARATIONS,
        ...VOTE_DECLARATIONS,
        ...HOST_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
