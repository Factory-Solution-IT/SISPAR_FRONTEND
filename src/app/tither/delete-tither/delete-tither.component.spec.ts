import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTitherComponent } from './delete-tither.component';

describe('DeleteTitherComponent', () => {
  let component: DeleteTitherComponent;
  let fixture: ComponentFixture<DeleteTitherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTitherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
