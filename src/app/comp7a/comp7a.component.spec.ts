import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7aComponent } from './comp7a.component';

describe('Comp7aComponent', () => {
  let component: Comp7aComponent;
  let fixture: ComponentFixture<Comp7aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp7aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
