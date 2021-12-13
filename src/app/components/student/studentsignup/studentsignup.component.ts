import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  studentlogin!:FormGroup
  
  constructor(private route:Router) { }

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
  
    
    alert("student Record inserted succcessfully")
    console.log(form.value)
    this.route.navigate(['']);
    
    let formValues={
       Name:this.studentlogin.value.input,
       MobileNumber:this.studentlogin.value.input,
       Email:this.studentlogin.value.input,
       DOB:this.studentlogin.value.input,
       Password:this.studentlogin.value.input
    }
  }

}
