import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsCreateComponent } from './contributors-create.component';

describe('ContributorsCreateComponent', () => {
  let component: ContributorsCreateComponent;
  let fixture: ComponentFixture<ContributorsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
