import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPage } from './number-page';

describe('NumberPage', () => {
  let component: NumberPage;
  let fixture: ComponentFixture<NumberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
