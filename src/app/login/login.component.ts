import { Component, OnInit } from '@angular/core';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {Router} from '@angular/router';
import {StudentsService} from '../services/students.service';
import {Skill, Student} from '../student';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: Student = {
    name: '',
    first_name: '',
    id: '',
    img: '',
    number_phone: '',
    pwd: '',
    skills: {},
    mail: ''
  };

  error: any = null;

  constructor(private router: Router, private studentsService: StudentsService) { }

  ngOnInit() {

  }
  sendLogin(myForm) {

    if (myForm.valid === true) {
        this.router.navigate(['/form']);
        console.log('Valid user');
      } else {
        this.error = {
          title: 'ERREUR',
          text: 'Vous n\'avez pas correctement rempli tous les champs'
        };
        console.log('Not valid user');
      }
    }



}
