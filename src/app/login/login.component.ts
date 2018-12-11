import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title }     from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Router, CanActivate } from '@angular/router';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  headTitle = "Login";
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
  model: any = {};
  ToggleButton: boolean = true;
  toastOptions:ToastOptions = {
    title: "Please try again",
    msg: "",
    showClose: true,
    timeout: 2000,
    theme: 'bootstrap',
    onAdd: (toast:ToastData) => {
        // console.log('Toast ' + toast.id + ' has been added!');
    },
    onRemove: function(toast:ToastData) {
        // console.log('Toast ' + toast.id + ' has been removed!');
    }
  };
  constructor( @Inject(DOCUMENT) private document: Document, private api: ApiService, public router: Router,private toastaService:ToastaService, private toastaConfig: ToastaConfig) { }

  ngOnInit() {
    // this.document.body.classList.add('loginbody');
  }
  onSubmit() {
    this.ToggleButton = false;
    var logindata = this.model;
    logindata = {username:"admin",password:"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"};
    this.api.login(logindata).subscribe((response) => {
      this.ToggleButton = true;
      this.toastOptions.title="Success";
      this.toastOptions.msg="Loggedin successfully";
      this.toastaService.success(this.toastOptions);
      
      setTimeout(() => { this.router.navigate(['home']); }, 2000);
      
    }, 
    (error) => { // error path
      this.toastOptions.title="Error";
      this.toastOptions.msg="Please try again";
      this.toastaService.error(this.toastOptions);
      console.log(error);
    });
  }
}
