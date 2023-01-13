import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poke } from '../pokemon.model';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    constructor(private httpClient: HttpClient) {
    }

    carregarPokemons() {
        return this.httpClient
            .get<any>('https://pokeapi.co/api/v2/pokemon');
    }

    carregarPokemon(pokemon: any) {
        return this.httpClient
            .get<any>(pokemon.url);
    }

    getPoke(offset: number = 0, limit: number = 10): Observable<Poke[]> {
        return this.httpClient.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        ) as Observable<Poke[]>;
    }

}
