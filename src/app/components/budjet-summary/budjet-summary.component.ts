import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budjet-summary',
  templateUrl: './budjet-summary.component.html',
  styleUrls: ['./budjet-summary.component.css']
})
export class BudjetSummaryComponent implements OnInit {
  /**
   * Период
   */
  public budgetDate = new Date();

  @Input() items: [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Сумма дохода/расхода за период
   * @param items - массив с данными о доходе/расходе
   * @param type - вид ('income', 'expense')
   * @return сумма дохода/расхода за период
   */
  getItemsSum (items, type: string) {
    return items.reduce((res, item) => res + (item.type === type ? item.value : 0), 0);
  }
}
