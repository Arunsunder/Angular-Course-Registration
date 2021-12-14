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

  loginform!: FormGroup;
  constructor(private route:Router) { }

  
  ngOnInit(): void {
    this.loginform=new FormGroup({
      logoption:new FormControl('',[Validators.required]),
      username:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  get f(){
    return this.loginform.controls;
  }

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
