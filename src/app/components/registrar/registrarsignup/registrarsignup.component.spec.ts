import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsignupComponent } from './registrarsignup.component';

describe('RegistrarsignupComponent', () => {
  let component: RegistrarsignupComponent;
  let fixture: ComponentFixture<RegistrarsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
