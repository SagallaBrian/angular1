import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4bComponent } from './comp4b.component';

describe('Comp4bComponent', () => {
  let component: Comp4bComponent;
  let fixture: ComponentFixture<Comp4bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp4bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
