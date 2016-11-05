import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { LobbyComponent } from './lobby/lobby.component';

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
        path: 'lobby',
        component: LobbyComponent
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
