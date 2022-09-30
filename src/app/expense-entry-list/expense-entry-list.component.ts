import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry/expense-entry.component';
import { DebugService } from '../debug.service';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.scss'],
  providers: [DebugService]
})
export class ExpenseEntryListComponent implements OnInit {

  title!: string;
  expenseEntries!: ExpenseEntry[];
  constructor(private debugService: DebugService, private restService : ExpenseEntryService ) { }

  ngOnInit() {
     this.debugService.info("Expense Entry List component initialized");
     this.title = "Expense Entry List";
     this.getExpenseItems();
  }

  getExpenseItems() {
     this.restService.getExpenseEntries()
     .subscribe( (data: ExpenseEntry[]) => this.expenseEntries = data );
  }


}
