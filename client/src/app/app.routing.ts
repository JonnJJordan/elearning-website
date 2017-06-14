import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './app.guard';
import { BasicAlgebraCourseComponent } from './components/basic-algebra-course/basic-algebra-course.component';
import { IntermediateAlgebraCourseComponent } from './components/intermediate-algebra-course/intermediate-algebra-course.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'basic-algebra',
        component: BasicAlgebraCourseComponent
    },
    {
        path: 'intermediate-algebra',
        component: IntermediateAlgebraCourseComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);