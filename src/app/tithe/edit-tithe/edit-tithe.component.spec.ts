import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTitheComponent } from './edit-tithe.component';

describe('EditTitheComponent', () => {
  let component: EditTitheComponent;
  let fixture: ComponentFixture<EditTitheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTitheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTitheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
