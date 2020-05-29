import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTitheComponent } from './delete-tithe.component';

describe('DeleteTitheComponent', () => {
  let component: DeleteTitheComponent;
  let fixture: ComponentFixture<DeleteTitheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTitheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTitheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
