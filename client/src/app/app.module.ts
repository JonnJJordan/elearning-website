import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './app.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { BasicAlgebraCourseComponent } from './components/basic-algebra-course/basic-algebra-course.component';
import { IntermediateAlgebraCourseComponent } from './components/intermediate-algebra-course/intermediate-algebra-course.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    BasicAlgebraCourseComponent,
    IntermediateAlgebraCourseComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    routing
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
