import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-budjet-summary',
  templateUrl: './budjet-summary.component.html',
  styleUrls: ['./budjet-summary.component.css']
})
export class BudjetSummaryComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
}
