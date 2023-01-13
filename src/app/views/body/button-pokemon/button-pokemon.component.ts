import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-button-pokemon',
    templateUrl: './button-pokemon.component.html',
    styleUrls: ['./button-pokemon.component.css']
})
export class ButtonPokemonComponent implements OnInit {

    pokemon: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.pokemon = this.data;
    }

}
