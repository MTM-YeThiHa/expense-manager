import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpenseEntryService } from '../expense-entry.service';
import { switchMap } from 'rxjs/operators';
 @Component({ 
  selector: 'app-expense-entry', 
  templateUrl: './expense-entry.component.html', styleUrls: ['./expense-entry.component.scss'] 
}) 
export class ExpenseEntryComponent implements OnInit {
  title: string | undefined;
  expenseEntry$!: Observable<ExpenseEntry>;
  expenseEntry: ExpenseEntry = {} as ExpenseEntry;
  selectedId!: number;


  constructor(private restService : ExpenseEntryService, private router : Router, private route : 
    ActivatedRoute ) { } 
       ngOnInit() { 
          this.title = "Expense Entry"; 
       this.expenseEntry$ = this.route.paramMap.pipe( 
          switchMap((params: any) => { 
             this.selectedId = Number(params.get('id')); 
             return 
    this.restService.getExpenseEntry(this.selectedId); })); 
       this.expenseEntry$.subscribe( (data) => this.expenseEntry = data ); 
       } 
       goToList() { 
          this.router.navigate(['/expenses']); 
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