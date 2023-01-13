import { Component, OnInit } from '@angular/core';
import { PipeService } from 'src/app/services/pipe.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
    pokemons: any = [];
    pokemonFiltered: any[] = [];
    offset = 30;
    limit = 0;

    constructor(public PokemonService: PokemonService,
        private readonly pipeService: PipeService) {

        this.PokemonService.carregarPokemons().subscribe((pokemonList: any) => {

            this.pokemons = pokemonList.results;
            this.pokemonFiltered = this.pokemons;
        });
    }

    ngOnInit(): void {
        this.getPokemons();
        this.receiveFilterChanges();
    }

    private getPokemons() {
        this.PokemonService.getPoke(this.offset).subscribe((pokemonList: any) => {
            if (this.pokemons.length == 0) {
                this.pokemons = pokemonList.results;
            }
            else {
                this.pokemons.push(...pokemonList.results);
            }
        });
    }

    receiveFilterChanges() {
        this.pipeService.onFilter.subscribe(message => {
            this.filtrarPokemon(message);
        });
    }

    filtrarPokemon(searchValue: string) {
        if (searchValue == '') {
            this.pokemonFiltered = this.pokemons;
        }
        else {
            this.pokemonFiltered = this.pokemons.filter((element: any, index: number, array: any) => {

                if (element.name.toLowerCase().trim().search(searchValue.toLocaleLowerCase().trim()) > -1) {
                    return element;
                } else {
                    // msg quando n aparecer pokemons
                }

            });
        }
    }

    onScroll(): void {
        this.offset += 10;
        this.getPokemons();
    }

}
