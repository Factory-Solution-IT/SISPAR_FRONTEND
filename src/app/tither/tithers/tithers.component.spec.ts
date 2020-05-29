import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TithersComponent } from './tithers.component';

describe('TithersComponent', () => {
  let component: TithersComponent;
  let fixture: ComponentFixture<TithersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TithersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TithersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
