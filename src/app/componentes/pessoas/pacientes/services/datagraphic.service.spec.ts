import { TestBed } from '@angular/core/testing';

import { DatagraphicService } from './datagraphic.service';

describe('DatagraphicService', () => {
  let service: DatagraphicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagraphicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
