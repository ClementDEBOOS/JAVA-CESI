import { Component, OnInit } from '@angular/core';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {Router} from '@angular/router';
import {StudentsService} from '../services/students.service';
import {Student} from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: Student = {
    name: '',
    competence: '',
    first_name: '',
    id: '',
    img: '',
    number_phone: '',
    pwd: '',
    star: 0,
    mail: ''
  };

  error: any = null;

  constructor(private router: Router, private studentsService: StudentsService) { }

  ngOnInit() {

  }
  sendLogin() {
    console.log(this.students.name, this.students.pwd);

    this.studentsService.getUsers().subscribe((credentials) => {
      if (credentials.filter( cred => (cred.name === this.students.name) && (cred.pwd === this.students.pwd)).length > 0) {
        // User valid
        this.router.navigate(['/form']);
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
