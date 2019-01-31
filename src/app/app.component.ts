import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Хранилище данных о доходе/расходе
   */
  public items = [];

  ngOnInit(): void { }

  /**
   * Добавление дохода/расхода
   */
  onAddItem(item) {
    this.items.push(item);
  }

  /**
   * Удаление дохода/расхода
   */
  onDeleteItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
