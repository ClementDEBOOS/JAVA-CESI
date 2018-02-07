import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../services/students.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  errorMessage: string;


  students = [];

  constructor(private route: ActivatedRoute, private studentsService: StudentsService, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.getStudent(params['id']);
    });
  }

  getStudent(studentId: string): void {
    this.studentsService.getStudent(studentId)
      .subscribe(students => {
        this.students = students;
        if (students.length === 0) {
          this.errorMessage = 'Empty list of student';
        } else {
          this.errorMessage = '';
        }
      });
  }

  goBack(): void {
    this.location.back();
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
    });
  }
}
