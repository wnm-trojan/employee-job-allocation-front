import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogDetailsComponent } from './worklog-details.component';

describe('WorklogDetailsComponent', () => {
  let component: WorklogDetailsComponent;
  let fixture: ComponentFixture<WorklogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
