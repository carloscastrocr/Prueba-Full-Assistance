import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { DetailPokemon } from 'src/app/models/detail-pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  name:string | null = null;
  dataPokemon?:DetailPokemon ;
 
  constructor(private pokemonService:PokemonService,private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name =  params.get('name');
      if (this.name) {
        this.pokemonService.getDatosPokemon(this.name||'').subscribe(
          (data) => {
            this.dataPokemon = data
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    })

  }
}
