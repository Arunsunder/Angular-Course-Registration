import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { CourseComponent } from './components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RegistrarsignupComponent } from './components/registrar/registrarsignup/registrarsignup.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsignupComponent } from './components/student/studentsignup/studentsignup.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminportalComponent},
  {path:'registrarsignup',component:RegistrarsignupComponent},
  {path:'student',component:StudentComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'studentsignup',component:StudentsignupComponent},
  {path:'courseform',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
