import { async, TestBed } from '@angular/core/testing';
import { WidgetConfirmAlertModule } from './widget-confirm-alert.module';

describe('WidgetConfirmAlertModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetConfirmAlertModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetConfirmAlertModule).toBeDefined();
  });
});
