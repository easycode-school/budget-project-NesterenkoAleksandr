import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBudgetItem } from '../../shared/budget-item';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  /**
   * Событие "Данные о доходе/расходе добавлены"
   */
  @Output() itemAdded = new EventEmitter();

  @ViewChild('addForm') form: NgForm;

  /**
   * Операция (доход/расход)
   */
  public item: IBudgetItem = {
    type: 'income',
    description: '',
    value: 0
  };

  constructor() { }

  ngOnInit() {
  }

  /**
   * Обработчик события "Submit"
   */
  public onSubmit(): void {
    // Если форма не прошла валидацию
    if (this.form.invalid) {
      return;
    }

    // Инициация события "Операция добавлена"
    this.itemAdded.emit(Object.assign({}, this.item));

    // Очистить поля
    this.item.description = null;
    this.item.value = 0;
  }
}
