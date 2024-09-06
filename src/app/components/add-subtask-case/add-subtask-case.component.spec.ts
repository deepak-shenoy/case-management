import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtaskCase } from './add-subtask-case.component';

describe('AddSubtaskCase', () => {
  let component: AddSubtaskCase;
  let fixture: ComponentFixture<AddSubtaskCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubtaskCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubtaskCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
