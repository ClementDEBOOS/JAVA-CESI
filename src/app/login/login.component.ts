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
      /*this.router.navigate(['/valid']);*/

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

  sendStep(myForm) {
    this.router.navigate(['/form']);
  }


  getStudentSkills(student) {
    return Object.keys(student.skills);

  }
  onClick = ($event: OnClickEvent, skill) => {
    console.log('onClick $event: ', $event);
    this.students.skills[skill] = $event.rating;
  };
  /*onClickResult: OnClickEvent;
  onClickResultJAVA: OnClickEvent;
  onClickResultJEE: OnClickEvent;
  onClickResultPhyton: OnClickEvent;
  onClickResultPHP: OnClickEvent;
  onClickResultDotnet: OnClickEvent;
  onClickResultC: OnClickEvent;
  onClickResultHTML: OnClickEvent;
  onClickResultCSS: OnClickEvent;
  onClickResultRuby: OnClickEvent;
  onClickResultCobol: OnClickEvent;
  onClickResultScala: OnClickEvent;
  onClickResultArduino: OnClickEvent;
  onClickResultJavascipt: OnClickEvent;
  onClickResultAngularJS: OnClickEvent;
  onClickResultAngular: OnClickEvent;
  onClickResultIonic: OnClickEvent;
  onClickResulIonic2: OnClickEvent;
  onClickResultPowershell: OnClickEvent;


  onClick = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  }

  onClickJAVA = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJAVA = $event;
  }
  onClickJEE = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJEE = $event;
  }
  onClickPython = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPhyton = $event;
  }
  onClickPHP = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPHP = $event;
  }
  onClickDotnet = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultDotnet = $event;
  }
  onClickC = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultC = $event;
  }
  onClickHTML = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultHTML = $event;
  }
  onClickCSS = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultCSS = $event;
  }
  onClickRuby = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultRuby = $event;
  }
  onClickCobol = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultCobol = $event;
  }
  onClickScala = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultScala = $event;
  }
  onClickArduino = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultArduino = $event;
  }
  onClickJavascript = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJavascipt = $event;
  }
  onClickAngularJS = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultAngularJS = $event;
  }
  onClickAngular = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultAngular = $event;
  }
  onClickIonic = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultIonic = $event;
  }
  onClickIonic2 = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResulIonic2 = $event;
  }
  onClickPowershell = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPowershell = $event;
  }


  onClickResultSQL: OnClickEvent;
  onClickResultJSON: OnClickEvent;
  onClickResultXSL: OnClickEvent;
  onClickResultXML: OnClickEvent;

  onClickSQL = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultSQL = $event;
  }

  onClickJSON = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJSON = $event;
  }
  onClickXSL = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultXSL = $event;
  }
  onClickXML = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultXML = $event;
  }
*/

}
