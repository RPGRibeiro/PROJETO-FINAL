import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormComponent } from './registro-form.component';

describe('RegistroFormComponent', () => {
  let component: RegistroFormComponent;
  let fixture: ComponentFixture<RegistroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFormComponent]
    });
    fixture = TestBed.createComponent(RegistroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
