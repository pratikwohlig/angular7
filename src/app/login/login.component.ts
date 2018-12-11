import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title }     from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  headTitle = "Login";
  pwdPattern1 = "/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/";
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
  model: any = {};
  constructor( @Inject(DOCUMENT) private document: Document, private api: ApiService, public router: Router) { }

  ngOnInit() {
    this.document.body.classList.add('loginbody');
  }
  onSubmit() {
    var logindata = this.model;
    logindata = {username:"admin",password:"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"};
    this.api.login(logindata).subscribe((response) => {
      console.log(response);
      this.router.navigate(['home']);
    }, 
    (error) => { // error path
      console.log(error);
    });
  }
}
