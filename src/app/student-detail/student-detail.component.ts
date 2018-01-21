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


  student = {};

  constructor(private route: ActivatedRoute, private studentsService: StudentsService, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log('Bonjour', this.getStudent(params['id']));
      this.getStudent(params['id']);
    });
  }

  getStudent(studentId: string): void {
    this.studentsService.getStudent(studentId)
      .subscribe(students => {
        this.student = students;
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
}
