import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorformComponent } from './contributorform.component';

describe('ContributorformComponent', () => {
  let component: ContributorformComponent;
  let fixture: ComponentFixture<ContributorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
