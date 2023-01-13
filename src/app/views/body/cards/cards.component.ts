import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PipeService } from 'src/app/services/pipe.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ButtonPokemonComponent } from '../button-pokemon/button-pokemon.component';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

    @Input()
    pokemon: any;

    @Input()
    numero: number;

    constructor(
        public PokemonService: PokemonService,
        public dialogRef: MatDialog,
        private readonly pipeService: PipeService
    ) { }

    ngOnInit() {
        this.PokemonService.carregarPokemon(this.pokemon).subscribe((detalhePokemon) => {
            this.pokemon.detalhes = detalhePokemon
        });

        this.pipeService.onFilter.subscribe(message => {
            console.log(message);
        })
    }

    MostrarPokemon(): void {

        const dialogRef = this.dialogRef.open(ButtonPokemonComponent, {
            data: this.pokemon
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Pokémon Card Fechado');
        });

    }
}
