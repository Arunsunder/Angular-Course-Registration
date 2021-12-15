import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
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
      studentname :new FormControl('',[Validators.required]),
      studentemail:new FormControl('',[Validators.required,Validators.email]),
      studentmobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      studentdob:new FormControl(),
      studentpassword:new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  get f(){
    return this.studentlogin.controls;
  }

  Submit(form:FormGroup){

    alert("student Record inserted succcessfully")
    console.log(form.value)
    this.route.navigate(['']);
    
  }

}
