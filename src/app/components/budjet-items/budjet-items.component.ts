import { Component, OnInit, Input} from '@angular/core';
import { IBudgetItem } from '../../shared/budget-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-budjet-items',
  templateUrl: './budjet-items.component.html',
  styleUrls: ['./budjet-items.component.css']
})
export class BudjetItemsComponent implements OnInit {
   /**
   * Вид операции ('income', 'expense')
   */
  @Input() public itemsType: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  /**
   * Обработчик события "DeleteItem"
   * @param item - строка дохода/расхода
   */
  public onDeleteItem(item: IBudgetItem): void {
    // Инициация события "Удалить данные о доходе/расходе"
    this.dataService.deleteItem(item);
  }
}
