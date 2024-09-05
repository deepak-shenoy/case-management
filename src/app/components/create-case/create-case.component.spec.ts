import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCase } from './create-case.component';

describe('CreateCaseComponent', () => {
  let component: CreateCase;
  let fixture: ComponentFixture<CreateCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
