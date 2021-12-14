import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private route:Router,private builder:FormBuilder) { }

  username = new FormControl('', [Validators.required,Validators.minLength(5)]);

  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.loginform=new FormGroup({
      logoption:new FormControl(),
      //username:new FormControl(),
      //password:new FormControl()
    });
  }

  loginform: FormGroup=this.builder.group({
    username:this.username,
    password:this.password
  })

 
  onSubmit(form:FormGroup){
    const loginoption=form.value['logoption'];
    if(loginoption==='admin'){
       this.route.navigate(['/admin']);
    }
    else if(loginoption==='registrar'){
      this.route.navigate(['/registrar']);
    }
    else if(loginoption==='student'){
      this.route.navigate(['/student']);
    }
  }

}
