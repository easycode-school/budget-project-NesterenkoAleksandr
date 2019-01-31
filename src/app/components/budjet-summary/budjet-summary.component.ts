import { Component, OnInit, Input } from '@angular/core';
import { IBudgetItem } from '../../shared/budget-item';

@Component({
  selector: 'app-budjet-summary',
  templateUrl: './budjet-summary.component.html',
  styleUrls: ['./budjet-summary.component.css']
})
export class BudjetSummaryComponent implements OnInit {

  @Input() items: IBudgetItem[];

  /**
   * Сумма доходов
   */
  public get incomeSum(): number {
    return this.getItemsSum(this.items, 'income');
  }

  /**
   * Сумма расходов
   */
  public get expenseSum(): number {
    return this.getItemsSum(this.items, 'expense');
  }

  /**
   * Итоговая сумма
   */
  public get total(): number {
    return this.incomeSum - this.expenseSum;
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * Сумма дохода/расхода за период
   * @param items - массив с данными о доходе/расходе
   * @param type - вид ('income', 'expense')
   * @return сумма дохода/расхода за период
   */
  public getItemsSum (items: Array<IBudgetItem>, type: string): number {
    return items.reduce((res: number, item: IBudgetItem) => res + (item.type === type ? item.value : 0), 0);
  }
}
