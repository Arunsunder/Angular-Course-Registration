import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarsignup',
  templateUrl: './registrarsignup.component.html',
  styleUrls: ['./registrarsignup.component.css']
})
export class RegistrarsignupComponent implements OnInit {

  registrarlogin!: FormGroup;

  constructor(private route:Router) { }

  ngOnInit(): void {

    this.registrarlogin=new FormGroup({
      registrarname:new FormControl(),
      registrarmobile:new FormControl(),
      registrardob:new FormControl(),
      registraremail:new FormControl(),
      registrarexperience:new FormControl(),
      registrarpassword:new FormControl()

    });
  }

  onSubmit(form:FormGroup){
    console.log(form.value)
    alert("Record was inserted successfully")
     this.route.navigate(['/admin'])
  }

}
