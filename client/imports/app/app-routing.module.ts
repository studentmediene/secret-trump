import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { VoteComponent } from './vote/vote.component';

import { HostRegisterComponent } from './host/host-register.component';
import { HostGameComponent } from './host/game/host-game.component';

import { StartedComponent } from './started/started.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'client/lobby/:gameId',
        component: LobbyComponent
    },
    {
        path: 'create-game',
        component: HostRegisterComponent
    },
    {
        path:'host/:id',
        component: HostGameComponent
    },
    {
        path:'started/:gameId',
        component: StartedComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
