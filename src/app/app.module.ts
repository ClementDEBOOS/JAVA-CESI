import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FormCvComponent } from './form-cv/form-cv.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { HomeComponent } from './home/home.component';
import { LoginCesiComponent } from './login-cesi/login-cesi.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { FilterArrayPipe } from './pipes/filter-array-pipe';
import { OrderByPipe } from './pipes/orderby-pipe';
import { FilterArrayCompPipe } from './pipes/filter-array-comp-pipe';
import {HttpClientModule} from '@angular/common/http';
import {StudentsService} from './services/students.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StarRatingModule } from 'angular-star-rating';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormCvComponent },
  { path: 'pwdForget', component: PasswordForgetComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loginCesi', component: LoginCesiComponent },
  { path: 'listStudent', component: ListStudentComponent },
  { path: 'studentDetail/:id', component: StudentDetailComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  exports: [RouterModule ],

  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ContactComponent,
    FormCvComponent,
    PasswordForgetComponent,
    HomeComponent,
    LoginCesiComponent,
    ListStudentComponent,
    FilterArrayPipe,
    OrderByPipe,
    FilterArrayCompPipe,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
