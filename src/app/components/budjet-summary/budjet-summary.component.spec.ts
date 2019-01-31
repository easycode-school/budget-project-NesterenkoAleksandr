import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudjetSummaryComponent } from './budjet-summary.component';

describe('BudjetSummaryComponent', () => {
  let component: BudjetSummaryComponent;
  let fixture: ComponentFixture<BudjetSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudjetSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudjetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
