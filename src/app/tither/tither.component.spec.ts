import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitherComponent } from './tither.component';

describe('TitherComponent', () => {
  let component: TitherComponent;
  let fixture: ComponentFixture<TitherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
