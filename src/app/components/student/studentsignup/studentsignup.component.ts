import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  constructor() { }
  studentlogin!:FormGroup
  DataID:number=0;
  ngOnInit(): void {
    this.studentlogin=new FormGroup({
      studentname :new FormControl(),
      studentemail:new FormControl(),
      studentmobile:new FormControl(),
      studentdob:new FormControl(),
      studentpassword:new FormControl()
    });
  }

  Submit(form:FormGroup){
    let formValues={
       Name:this.studentlogin.value.input,
       MobileNumber:this.studentlogin.value.input,
       Email:this.studentlogin.value.input,
       DOB:this.studentlogin.value.input,
       Password:this.studentlogin.value.input
    }
  }

}
