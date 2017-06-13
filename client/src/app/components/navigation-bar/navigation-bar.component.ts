import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.auth.isAuthenticated().subscribe(res => {
            this.isAuthenticated = res.status;
            console.log(this.isAuthenticated);
        });
      }
    })
  }

  ngOnInit() {
  }

  logout () {
    this.auth.logout()
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      })
  }

}
