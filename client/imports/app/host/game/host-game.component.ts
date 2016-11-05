import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//noinspection TypeScriptCheckImport
import template from './host-game.component.html';

@Component({
    selector: 'st-host-game',
    template
})
export class HostGameComponent implements OnInit, OnDestroy{
    gameId: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit():void {
        this.sub = this.route.params.subscribe((params) => {
            this.gameId = params['id'];
        });

        
    }

    ngOnDestroy():void {
        this.sub.unsubscribe();
    }
}
