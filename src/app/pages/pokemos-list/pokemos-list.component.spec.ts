import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PokemosListComponent } from './pokemos-list.component';

describe('PokemosListComponent', () => {
  let component: PokemosListComponent;
  let fixture: ComponentFixture<PokemosListComponent>;

  let httpMok:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemosListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMok=TestBed.get(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
