import { Injectable } from '@angular/core';

import { QualityLevel } from '../../pages/home/types/password.type';

@Injectable()
export class MockPasswordService {
  defineQualityLevel(): QualityLevel {
    return QualityLevel.Average;
  }
}
