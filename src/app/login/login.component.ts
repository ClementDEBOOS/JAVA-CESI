import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {StudentsService} from '../services/students.service';
import { Student} from '../student';
import {OnClickEvent} from 'angular-star-rating';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: Student = {
    mail: '',
    first_name: '',
    id: '',
    img: '',
    name: '',
    number_phone: '',
    pwd: '',
    skills: {
      'CSharp': 0,
      'Java': 0,
      'JEE': 0,
      'Dotnet': 0,
      'C': 0,
      'Python': 0,
      'HTML': 0,
      'CSS': 0,
      'Ruby': 0,
      'Cobol': 0,
      'Scala': 0,
      'Arduino': 0,
      'JavaScript': 0,
      'AngularJS': 0,
      'Angular5': 0,
      'Ionic_1': 0,
      'Ionic_2_3': 0,
      'PowerShell': 0,
      'PHP': 0,
      'SQL': 0,
      'JSON': 0,
      'XSL': 0,
      'XML': 0,
    }
  };


  error: any = null;

  constructor(private router: Router, private studentsService: StudentsService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  sendLogin(myForm) {

    if (myForm.valid === true) {
      this.router.navigate(['/valid']);
      console.log('Valid user');
      console.log(this.students.skills);
    } else {
      this.error = {
        title: 'ERREUR',
        text: 'Vous n\'avez pas correctement rempli tous les champs'
      };
      console.log('Not valid user');
    }
  }

  getStudentSkills(student) {
    return Object.keys(student.skills);

  }

  onClick = ($event: OnClickEvent, skill) => {
    console.log('onClick $event: ', $event);
    this.students.skills[skill] = $event.rating;
  }
}
