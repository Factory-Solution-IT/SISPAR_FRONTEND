import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTitherComponent } from './edit-tither.component';

describe('EditTitherComponent', () => {
  let component: EditTitherComponent;
  let fixture: ComponentFixture<EditTitherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTitherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
