import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsAjouterComponent } from './enseignants-ajouter.component';

describe('EnseignantsAjouterComponent', () => {
  let component: EnseignantsAjouterComponent;
  let fixture: ComponentFixture<EnseignantsAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantsAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantsAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
