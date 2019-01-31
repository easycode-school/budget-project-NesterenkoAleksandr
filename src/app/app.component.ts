import { Component, OnInit } from '@angular/core';
import { IBudgetItem } from './shared/budget-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Период
   */
  public budgetDate = new Date();

  /**
   * Хранилище данных о доходе/расходе
   */
  public items: IBudgetItem[] = [];

  ngOnInit(): void { }

  /**
   * Добавление дохода/расхода
   * @param item - строка дохода/расхода
   */
  public onAddItem(item: IBudgetItem): void {
    this.items.push(item);
  }

  /**
   * Удаление дохода/расхода
   * @param item - строка дохода/расхода
   */
  public onDeleteItem(item: IBudgetItem): void {
    const index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
