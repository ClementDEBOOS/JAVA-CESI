import { Component, OnInit } from '@angular/core';
import { PasswordForget } from '../passwordForget';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {

  passwordForget: PasswordForget = {
    mail: ''
  };

  constructor() { }

  ngOnInit() {
  }

  sendPasswordForget() {

  }

}
