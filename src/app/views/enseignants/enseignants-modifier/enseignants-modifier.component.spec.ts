import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsModifierComponent } from './enseignants-modifier.component';

describe('EnseignantsModifierComponent', () => {
  let component: EnseignantsModifierComponent;
  let fixture: ComponentFixture<EnseignantsModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantsModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantsModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
