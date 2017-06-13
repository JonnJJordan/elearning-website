import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {};
  }

  login (e: any){
    e.preventDefault();
    this.auth.login(this.user)
      .subscribe(
        user => {

          let user_data = {
            name: user.data.name,
            email: user.data.email,
            username: user.data.username
          };

          localStorage.setItem('user', JSON.stringify(user_data));
          this.router.navigate(['/profile']);
        },
        error => {
          console.log(error);
        }
      )
  }



}
