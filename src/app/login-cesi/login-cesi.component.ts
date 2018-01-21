import { Component, OnInit } from '@angular/core';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {Router} from '@angular/router';
import {StudentsService} from '../services/students.service';
import {Teacher} from '../teacher';

@Component({
  selector: 'app-login-cesi',
  templateUrl: './login-cesi.component.html',
  styleUrls: ['./login-cesi.component.css']
})
export class LoginCesiComponent implements OnInit {

  teachers: Teacher = {
    id: '',
    name: '',
    pwd: ''
  };

  error: any = null;

  constructor(private router: Router, private studentsService: StudentsService) { }

  ngOnInit() {
  }
  sendLogin() {
    console.log(this.teachers.name, this.teachers.pwd);

    this.studentsService.getTeacher().subscribe((credentials) => {
      if (credentials.filter( cred => (cred.name === this.teachers.name) && (cred.pwd === this.teachers.pwd)).length > 0) {
        // User valid
        this.router.navigate(['/listStudent']);
        console.log('Valid user');
      } else {
        this.error = {
          title: 'Identifiant ou mot de passe incorrecte',
          text: 'Recommencer'
        };
        console.log('Not valid user');
      }
    });


    /*
    // Fonction onchange regex
    if (this.user.mail === 'clement' && this.user.pwd === 'azerty') {
      this.router.navigate(['/home']);
    }else {
      this.error = {
        title: 'Identifiant ou mot de passe incorrecte',
        text: 'Recommencer'
      };
    }
    */
  }
}
