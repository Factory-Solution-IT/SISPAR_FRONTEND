import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitherComponent } from './add-tither.component';

describe('AddTitherComponent', () => {
  let component: AddTitherComponent;
  let fixture: ComponentFixture<AddTitherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTitherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
