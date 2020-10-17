import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoballocationComponent } from './create-joballocation.component';

describe('CreateJoballocationComponent', () => {
  let component: CreateJoballocationComponent;
  let fixture: ComponentFixture<CreateJoballocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJoballocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJoballocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
