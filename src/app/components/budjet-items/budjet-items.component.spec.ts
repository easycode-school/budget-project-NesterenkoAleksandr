import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudjetItemsComponent } from './budjet-items.component';

describe('BudjetItemsComponent', () => {
  let component: BudjetItemsComponent;
  let fixture: ComponentFixture<BudjetItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudjetItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudjetItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
