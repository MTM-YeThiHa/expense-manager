import { Component, OnInit } from '@angular/core'; @Component({ 
  selector: 'app-expense-entry', 
  templateUrl: './expense-entry.component.html', styleUrls: ['./expense-entry.component.scss'] 
}) 
export class ExpenseEntryComponent implements OnInit {
  title: string | undefined;
  expenseEntry!: ExpenseEntry;

  constructor() { } 
  ngOnInit() { 
     this.title = "Expense Entry" ;
     this.expenseEntry = {
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date (2022, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
     };
  } 
}

export interface ExpenseEntry {
  id: number;
  item: string;
  amount:number;
  category: string;
  location: string;
  spendOn: Date;
  createdOn: Date;
}