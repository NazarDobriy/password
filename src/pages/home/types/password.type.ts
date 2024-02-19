export interface CharacterProperties {
  isNumber: boolean;
  isLetter: boolean;
  isSymbol: boolean;
}

export enum QualityLevel {
  Empty,
  Invalid,
  Simple,
  Average,
  Stable
}
