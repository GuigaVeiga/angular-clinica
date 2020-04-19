import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsUpdateComponent } from './contributors-update.component';

describe('ContributorsUpdateComponent', () => {
  let component: ContributorsUpdateComponent;
  let fixture: ComponentFixture<ContributorsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
