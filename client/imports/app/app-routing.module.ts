import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { VoteComponent } from './vote/vote.component';
import { ClientGameComponent } from './client/client-game.component';

import { HostRegisterComponent } from './host/host-register.component';
import { HostGameComponent } from './host/game/host-game.component';

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
        path: 'client/game/:gameId',
        component: ClientGameComponent
    },
    {
        path:'vote',
        component: VoteComponent
    },
    {
        path: 'create-game',
        component: HostRegisterComponent
    },
    {
        path:'host/:id',
        component: HostGameComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
