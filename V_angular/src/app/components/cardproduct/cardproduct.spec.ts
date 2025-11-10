import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardproduct } from './cardproduct';

describe('Cardproduct', () => {
  let component: Cardproduct;
  let fixture: ComponentFixture<Cardproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
