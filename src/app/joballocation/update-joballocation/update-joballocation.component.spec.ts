import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoballocationComponent } from './update-joballocation.component';

describe('UpdateJoballocationComponent', () => {
  let component: UpdateJoballocationComponent;
  let fixture: ComponentFixture<UpdateJoballocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJoballocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoballocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
