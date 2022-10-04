import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseEntry } from '../expense-entry/expense-entry.component';
import { ExpenseEntryService } from '../expense-entry.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.scss']
})
export class EditEntryComponent implements OnInit {
  id!: number;
  item!: string;
  amount!: number;
  category!: string;
  location!:string;
  spendOn!: Date;

  formDate!: FormGroup;
  selectedId!: number;
  expenseEntry!: ExpenseEntry;
  formData: any;

  constructor(private expenseEntryService: ExpenseEntryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formDate = new FormGroup({
      id: new FormControl(),
      item: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(),
      location: new FormControl(),
      spendOn: new FormControl()
    });
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));

    if(this.selectedId != null && this.selectedId != 0) {
      this.expenseEntryService.getExpenseEntry(this.selectedId)
        .subscribe ((data) => {
          this.expenseEntry = data;
          this.formData.controls['id'].setValue(this.expenseEntry.id);
          this.formData.controls['item'].setValue(this.expenseEntry.item);
          this.formData.controls['amount'].setValue(this.expenseEntry.amount);
          this.formData.controls['category'].setValue(this.expenseEntry.category);
          this.formData.controls['location'].setValue(this.expenseEntry.location);

          this.formData.controls['spendOn'].setValue(this.expenseEntry.spendOn);
        })
    }
  }

  get itemValue() {
    return this.formData.get('item');
  }

  get amountValue() {
    return this.formData.get('amount');
  }

  onClickSubmit(data: any) {
    console.log('onClickSubmit fired');
    this.id = data.id;
    this.item = data.item;
    this.amount = data.amount;
    this.category = data.category;
    this.location = data.location;
    this.spendOn = data.spendOn;

    let expenseEntry : ExpenseEntry = {
      id: this.id,
      item: this.item,
      amount: this.amount,
      category: this.category,
      location: this.location,
      spendOn: this.spendOn,
      createdOn: new Date(2022, 10, 4)
    }
    console.log(expenseEntry);

      if(expenseEntry.id == null || expenseEntry.id == 0) {
        console.log('add fn fired');
      this.expenseEntryService.addExpenseEntry(expenseEntry)
        .subscribe( data => { console.log(data); this.router.navigate(['/expenses']); });
      } else {
        console.log('edit fn fired');
      this.expenseEntryService.updateExpenseEntry(expenseEntry)
        .subscribe( data => { console.log(data); this.router.navigate(['/expenses']); });
      }
  }

}
