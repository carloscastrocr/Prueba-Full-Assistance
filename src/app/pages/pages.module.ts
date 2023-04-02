import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PokemosListComponent } from './pokemos-list/pokemos-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent,
    PokemosListComponent,
    PokemonComponent,
    PokemonDetailComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
