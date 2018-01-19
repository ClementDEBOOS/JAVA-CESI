import { Component, OnInit } from '@angular/core';
import {Form} from '../form';
import {$} from 'protractor';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  form: Form = {
    last_name: '',
    first_name: '',
    address: '',
    age: '',
    country: '',
    mail: '',
    phone: '',
    zip: '',
    cv: ''
  };

  constructor() { }

  ngOnInit() {
  }
  sendForm() {

  }
}
