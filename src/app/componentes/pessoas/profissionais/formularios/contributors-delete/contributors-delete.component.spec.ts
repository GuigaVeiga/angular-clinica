import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsDeleteComponent } from './contributors-delete.component';

describe('ContributorsDeleteComponent', () => {
  let component: ContributorsDeleteComponent;
  let fixture: ComponentFixture<ContributorsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
