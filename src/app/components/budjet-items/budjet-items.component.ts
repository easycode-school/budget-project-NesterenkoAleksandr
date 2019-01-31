import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() items: [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Обработчик события "DeleteItem"
   */
  onDeleteItem(item) {
    // Инициация события "Удалить данные о доходе/расходе"
    this.deleteItem.emit(item);
  }
}
