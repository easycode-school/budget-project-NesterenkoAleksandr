import { Component, OnInit} from '@angular/core';
import { IBudgetItem } from '../../shared/budget-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-budjet-summary',
  templateUrl: './budjet-summary.component.html',
  styleUrls: ['./budjet-summary.component.css']
})
export class BudjetSummaryComponent implements OnInit {
  /**
   * Всего
   */
  public totalSum = 0;
  /**
   * Сумма доходов
   */
  public incomeSum = 0;
  /**
   * Сумма расходов
   */
  public expenseSum = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.itemsObservableSubject.subscribe((data: Array<IBudgetItem>) => {
      this.incomeSum = this.dataService.getItemsSum(data, 'income');
      this.expenseSum = this.dataService.getItemsSum(data, 'expense');
      this.totalSum = this.incomeSum - this.expenseSum;
    });
  }
}
