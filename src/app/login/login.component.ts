import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit() {
    this.userName = this.formData.controls['userName'].value;
    this.password = this.formData.controls['password'].value;

    console.log("Login pae: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.login(this.userName, this.password)
    .subscribe(data => {
      console.log("Is Login Success: " + data);

      if(data) this.router.navigate(['/expenses']);
    });
  }

}
