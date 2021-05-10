import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4aComponent } from './comp4a.component';

describe('Comp4aComponent', () => {
  let component: Comp4aComponent;
  let fixture: ComponentFixture<Comp4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp4aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
