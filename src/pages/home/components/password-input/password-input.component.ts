import { Component } from '@angular/core';

import { PasswordService } from '../../providers/password.service';
import { QualityLevel } from '../../types/password.type';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
})
export class PasswordInputComponent {
  value = '';
  statusClasses = ['rgb(75 85 99)', 'rgb(75 85 99)', 'rgb(75 85 99)'];
  private level = QualityLevel.Empty;

  constructor(private passwordService: PasswordService) {}

  change(password: string): void {
    this.level = this.passwordService.defineQualityLevel(password);
    this.formStatusClasses();
  }

  private formStatusClasses(): void {
    switch (this.level) {
      case QualityLevel.Empty: {
        this.statusClasses = [
          'rgb(75 85 99)',
          'rgb(75 85 99)',
          'rgb(75 85 99)',
        ];
        break;
      }
      case QualityLevel.Invalid: {
        this.statusClasses = [
          'rgb(220 38 38)',
          'rgb(220 38 38)',
          'rgb(220 38 38)',
        ];
        break;
      }
      case QualityLevel.Simple: {
        this.statusClasses = [
          'rgb(220 38 38)',
          'rgb(75 85 99)',
          'rgb(75 85 99)',
        ];
        break;
      }
      case QualityLevel.Average: {
        this.statusClasses = [
          'rgb(202 138 4)',
          'rgb(202 138 4)',
          'rgb(75 85 99)',
        ];
        break;
      }
      case QualityLevel.Stable: {
        this.statusClasses = [
          'rgb(22 163 74)',
          'rgb(22 163 74)',
          'rgb(22 163 74)',
        ];
        break;
      }
    }
  }
}
