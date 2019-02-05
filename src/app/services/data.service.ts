import { Injectable } from '@angular/core';
import { IBudgetItem } from '../shared/budget-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    /**
     * Строки с данными о расходе/доходе
     */
    private items: Array<IBudgetItem> = [];

    private _itemsSource = new BehaviorSubject(this.items);
    public itemsObservableSubject = this._itemsSource.asObservable();

    /**
     * Добавление дохода/расхода
     * @param item - добавляемая строка
     */
    public addItem(item: IBudgetItem): void {
        this.items.push(item);
        // распространяем событие на всех подписчиков и передаем им данные
        this._itemsSource.next(this.items);
    }

    /**
     * Операции, согласно типу
     * @param type - вид операции ('income', 'expense')
     */
    public getItems(type: string): Array<IBudgetItem> {
        return this.items.filter(item => item.type === type);
    }

    /**
     * Удаление дохода/расхода
     * @param item - удаляемая строка
     */
    public deleteItem(item: IBudgetItem): void {
        const index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
            // распространяем событие на всех подписчиков и передаем им данные
            this._itemsSource.next(this.items);
        }
    }

  /**
   * Сумма дохода/расхода за период
   * @param items - массив с данными о доходе/расходе
   * @param type - вид операции ('income', 'expense')
   * @return сумма дохода/расхода за период
   */
  public getItemsSum (items: Array<IBudgetItem>, type: string): number {
    return items.reduce((res: number, item: IBudgetItem) => res + (item.type === type ? item.value : 0), 0);
  }
}
