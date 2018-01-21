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

  orderProp: string = 'star';

  students = [];

  student: Student = {
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

  constructor(private router: Router, private studentsService: StudentsService) { }

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

  sendDetails(student) {
    this.router.navigate(['/studentDetail', student.id]);
  }
}
