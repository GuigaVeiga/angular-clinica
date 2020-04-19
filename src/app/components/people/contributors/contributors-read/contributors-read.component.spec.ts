import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsReadComponent } from './contributors-read.component';

describe('ContributorsReadComponent', () => {
  let component: ContributorsReadComponent;
  let fixture: ComponentFixture<ContributorsReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
