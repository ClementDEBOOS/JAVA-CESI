import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  errorMessage: string;

  orderProp: string = 'star';

  students = [];


  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
      this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(students => {
        this.students = students;
        if (students.length === 0) {
          this.errorMessage = 'Empty list of students';
        }else {
          this.errorMessage = '';
        }
      });
  }
}
