import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    mail: '',
    pwd: ''
  }

  constructor() { }

  ngOnInit() {

  }
  sendLogin(){
    console.log(this.login.mail, this.login.pwd);
  }

}
