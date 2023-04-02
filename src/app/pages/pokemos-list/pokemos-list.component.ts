import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemos-list',
  templateUrl: './pokemos-list.component.html',
  styleUrls: ['./pokemos-list.component.scss']
})
export class PokemosListComponent implements OnInit {
  listPokemon: Pokemon[] = []

  totalPost: number[] = [];
  currentPage = 1
  limit = 100;
  offset = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemons(this.limit, this.offset)
      .subscribe(
        ({ results, count }) => {
          this.listPokemon = results;
          for (let i = 1; i <= Math.ceil(count / this.limit); i++) {
            this.totalPost.push(i);
          }
        });
  }

  handleNextbtn = () => {
    this.currentPage = ++this.currentPage
    this.offset += this.limit;

    this.pokemonService.getListPokemons(this.limit, this.offset)
      .subscribe(
        ({ results }) => {
          this.listPokemon = results;
        });
  }

  handlePrevbtn = () => {
    this.currentPage = --this.currentPage
    this.offset -= this.limit;
    this.pokemonService.getListPokemons(this.limit, this.offset)
      .subscribe(
        ({ results }) => {
          this.listPokemon = results;
        });
  }
}
