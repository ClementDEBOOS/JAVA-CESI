import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-cesi',
  templateUrl: './login-cesi.component.html',
  styleUrls: ['./login-cesi.component.css']
})
export class LoginCesiComponent implements OnInit {

  login: Login = {
    mail: '',
    pwd: ''
  };
  error: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  sendLogin() {
    console.log(this.login.mail, this.login.pwd);
    // Fonction onchange regex
    if (this.login.mail === 'admin' && this.login.pwd === 'admin') {
      this.router.navigate(['/listStudent']);
    }else {
      this.error = {
        title: 'Mauvais identifiant',
        text: 'Recommencer'
      };
    }
  }
}
