import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ListPokemon } from '../../models/pokemon.interface';
import { DetailPokemon } from '../../models/detail-pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient) { }

  getListPokemons(limit: number, offset: number) {
    return this.http.get<ListPokemon>(`${this.apiUrl}/pokemon`,{ params: { offset, limit } })
  }

  getDatosPokemon(nombre:string){
    return this.http.get<DetailPokemon>(`${this.apiUrl}/pokemon/${nombre}`)
  }
}
