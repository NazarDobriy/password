import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStatusFieldComponent } from './password-status-field.component';

describe('PasswordStatusFieldComponent', () => {
  let component: PasswordStatusFieldComponent;
  let fixture: ComponentFixture<PasswordStatusFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordStatusFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStatusFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
