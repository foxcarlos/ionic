import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoPage } from './espectaculo.page';

describe('EspectaculoPage', () => {
  let component: EspectaculoPage;
  let fixture: ComponentFixture<EspectaculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
