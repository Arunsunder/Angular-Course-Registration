import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:FormGroup){
    
  }

}
