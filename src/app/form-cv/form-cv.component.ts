import { Component, OnInit } from '@angular/core';
import {Form} from '../form';

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
    age: 0,
    contry: '',
    mail: '',
    phone: '',
    zip: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
