import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students = [
    {
      'Name': 'Paul',
      'First_name': 'Pierre',
      'number_phone': '06.65.42.26.12',
      'competence': 'c# => 3 étoiles',
      'picture': '/assets/Images/student.png'
    },
    {
      'Name': 'Clotilde',
      'First_name': 'Pierre',
      'number_phone': '06.75.85.25.22',
      'comptence': 'Java => 3 étoiles',
      'picture': '/assets/Images/student.png'
    },
    {
      'Name': 'Nicolas',
      'First_name': 'Pierre',
      'number_phone': '06.66.23.49.91',
      'competence': 'PHP => 3 étoiles',
      'picture': '/assets/Images/student.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
