import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentComponent } from './components/student/student.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { StudentsignupComponent } from './components/student/studentsignup/studentsignup.component';
import { RegistrarsignupComponent } from './components/registrar/registrarsignup/registrarsignup.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HeaderComponent,
    FooterComponent,
    StudentComponent,
    AdminportalComponent,
    StudentsignupComponent,
    RegistrarsignupComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
