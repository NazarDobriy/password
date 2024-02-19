import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-status-field',
  templateUrl: './password-status-field.component.html'
})
export class PasswordStatusFieldComponent {
  @Input() statusClass = '';
}
