import { TestBed } from '@angular/core/testing';

import { ListadoPokemonService } from './listado-pokemon.service';

describe('ListadoPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadoPokemonService = TestBed.get(ListadoPokemonService);
    expect(service).toBeTruthy();
  });
});
