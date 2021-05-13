import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7bComponent } from './comp7b.component';

describe('Comp7bComponent', () => {
  let component: Comp7bComponent;
  let fixture: ComponentFixture<Comp7bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp7bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp7bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
