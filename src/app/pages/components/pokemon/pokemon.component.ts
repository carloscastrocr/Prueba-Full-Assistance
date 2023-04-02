import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{
  pokemon: Pokemon = {
    name: '',
    url: '',
  }
 @Input('pokemon') 
  set dato(pokemon:Pokemon){
    this.pokemon=pokemon
  }
  pokemonImages:string=''

  constructor(private pokemonService:PokemonService){  }

  ngOnInit(): void {
    this.pokemonService.getDatosPokemon(this.pokemon.name).subscribe(
      ({sprites}) => {
        this.pokemonImages = sprites.front_default;
      }); 
  }
}
