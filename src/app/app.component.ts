import { Component } from '@angular/core';
import { Poke } from './pokemon.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'angular-pokedex';
    pokemons: any = [];

    page = 1;
    pokes: Poke[] = [];

    constructor() { }

    ngOnInit(): void { }

}
