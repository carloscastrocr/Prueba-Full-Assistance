import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PokemonService } from './pokemon.service';

import { ListPokemon } from '../../models/pokemon.interface';
import { DetailPokemon } from '../../models/detail-pokemon.interface';


describe('PokemonService', () => {
  let service: PokemonService;
  let listPokemon:ListPokemon;
  let detailPokemon:DetailPokemon;

  let httpMok:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PokemonService);
    httpMok=TestBed.get(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
 it('should be return listPokemon', () => {
    service.getListPokemons(100,0).subscribe(
      (results ) => {
        expect(results).toBe(listPokemon);
      }
    )
  })

  it('should be detail of Pokemon', () => {
    service.getDatosPokemon('charmander').subscribe(
      (results ) => {
        expect(results).toBe(detailPokemon);
      }
    )
  })

});
