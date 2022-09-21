import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry/expense-entry.component';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.scss']
})
export class ExpenseEntryListComponent implements OnInit {

  getExpenseEntries(): ExpenseEntry[] {
    let mockExpenseEntries : ExpenseEntry[] = [
      {
        id: 1,
        item:"Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10 ),
      },
      {
        id: 1,
        item:"Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10 ),
      },
      {
        id: 1,
        item:"Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10 ),
      },
      {
        id: 1,
        item:"Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10 ),
      },
      {
        id: 1,
        item:"Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2022, 21, Math.floor((Math.random() * 30) + 1), 10, 10, 10 ),
      },
    ];
    return mockExpenseEntries;
  }
  title!: string;
  expenseEntries!: ExpenseEntry[]
  constructor() { } 
ngOnInit() { 
   this.title = "Expense Entry List"; 
   this.expenseEntries = this.getExpenseEntries(); 
}

}
