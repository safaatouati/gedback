import { TestBed } from '@angular/core/testing';

import { FamilyprocService } from './familyproc.service';

describe('FamilyprocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyprocService = TestBed.get(FamilyprocService);
    expect(service).toBeTruthy();
  });
});
