import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBudgetItem } from '../../shared/budget-item';

@Component({
  selector: 'app-budjet-items',
  templateUrl: './budjet-items.component.html',
  styleUrls: ['./budjet-items.component.css']
})
export class BudjetItemsComponent implements OnInit {
  /**
   * Событие "Удалить данные о доходе/расходе"
   */
  @Output() deleteItem = new EventEmitter();

  /**
   * Хранилище данных о доходе/расходе
   */
  @Input() items: IBudgetItem[];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Обработчик события "DeleteItem"
   * @param item - строка дохода/расхода
   */
  public onDeleteItem(item: IBudgetItem): void {
    // Инициация события "Удалить данные о доходе/расходе"
    this.deleteItem.emit(item);
  }
}
