import { Injectable } from '@angular/core';

import { CharacterProperties, QualityLevel } from '../types/password.type';

@Injectable()
export class PasswordService {
  private properties: CharacterProperties = this.initialProperties();
  private readonly MIN_LENGTH = 8;

  defineQualityLevel(password: string): QualityLevel {
    this.properties = this.initialProperties();
    this.handlePropertyMatchers(password);

    if (!password.length) {
      return QualityLevel.Empty;
    }

    if (password.length < this.MIN_LENGTH) {
      return QualityLevel.Invalid;
    }

    if (
      this.properties.isNumber &&
      this.properties.isLetter &&
      this.properties.isSymbol
    ) {
      return QualityLevel.Stable;
    }

    if (
      (this.properties.isNumber && this.properties.isLetter) ||
      (this.properties.isNumber && this.properties.isSymbol) ||
      (this.properties.isLetter && this.properties.isSymbol)
    ) {
      return QualityLevel.Average;
    }

    return QualityLevel.Simple;
  }

  private handlePropertyMatchers(password: string): void {
    this.properties.isNumber = /[0-9]/.test(password);
    this.properties.isLetter = /[a-zA-Z]/.test(password);
    this.properties.isSymbol = /[^0-9a-zA-Z]/.test(password);
  }

  private initialProperties(): CharacterProperties {
    return {
      isNumber: false,
      isLetter: false,
      isSymbol: false,
    };
  }
}
