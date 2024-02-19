import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { MockPasswordService } from '../../tests/providers/mock-password.service';
import { PasswordService } from './providers/password.service';
import { PasswordStatusFieldComponent } from './components/password-input/password-status-field/password-status-field.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PasswordInputComponent,
        PasswordStatusFieldComponent,
      ],
      providers: [
        {
          provide: PasswordService,
          useClass: MockPasswordService,
        },
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
