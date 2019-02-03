import { Injectable } from '@angular/core';
import { IBudgetItem } from '../shared/budget-item';

@Injectable()
export class DataService {
    /**
     * Строки с данными о расходе/доходе
     */
    public items: Array<IBudgetItem> = [];

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
    public get totalSum(): number {
        return this.incomeSum - this.expenseSum;
    }

    /**
     * Добавление дохода/расхода
     * @param item - добавляемая строка
     */
    public addItem(item: IBudgetItem): void {
        this.items.push(item);
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
