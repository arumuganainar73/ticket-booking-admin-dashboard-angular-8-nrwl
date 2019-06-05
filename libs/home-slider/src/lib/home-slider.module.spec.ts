import { async, TestBed } from '@angular/core/testing';
import { HomeSliderModule } from './home-slider.module';

describe('HomeSliderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeSliderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeSliderModule).toBeDefined();
  });
});
