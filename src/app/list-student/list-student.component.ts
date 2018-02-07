import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../services/students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  errorMessage: string;

  orderProp: string = name;

  students = [];

  constructor(private router: Router, private studentsService: StudentsService) { }

  ngOnInit() {
      this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(students => {
        this.students = students;

        console.log('coucou ' + this.students[0].id);
        if (students.length === 0) {
          this.errorMessage = 'Empty list of students';
        }else {
          this.errorMessage = '';
        }
      });
  }

  sendDetails(student) {
    this.router.navigate(['/studentDetail', student.id]);
  }

  getStudentSkills(student) {
    return Object.keys(student.skills).sort((a, b) => {
      if (student.skills[a] > student.skills[b]) {
        return -1;
      } else if (student.skills[b] > student.skills[a]) {
        return 1;
      } else {
        return 0;
      }
    }).slice(0, 5);
  }
}
