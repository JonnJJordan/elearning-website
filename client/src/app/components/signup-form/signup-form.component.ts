import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  name: string;
  username: string;
  email: string;
  password: string;
  password2: string;

  constructor
    (
      private userService: UserService,
      private router: Router
    ) { }

  clean () {
    this.name = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
  }

  register (event: Event) {
    event.preventDefault();
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      password2: this.password2
    };

    this.userService.register(user)
      .subscribe(user => {
        console.log('user created!');
        this.clean();
        this.router.navigate(['/signin']);
      });
  }

}
