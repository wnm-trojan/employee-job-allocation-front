import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoballocationDetailsComponent } from './joballocation-details.component';

describe('JoballocationDetailsComponent', () => {
  let component: JoballocationDetailsComponent;
  let fixture: ComponentFixture<JoballocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoballocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoballocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
