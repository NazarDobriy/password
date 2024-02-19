import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PasswordInputComponent } from './password-input.component';
import { PasswordService } from '../../providers/password.service';
import { MockPasswordService } from '../../../../tests/providers/mock-password.service';
import { PasswordStatusFieldComponent } from './password-status-field/password-status-field.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputComponent, PasswordStatusFieldComponent],
      providers: [
        {
          provide: PasswordService,
          useClass: MockPasswordService,
        },
      ],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
