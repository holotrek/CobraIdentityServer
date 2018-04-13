import { Component, OnInit } from '@angular/core';
import { loginManager } from '../../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  constructor() { }

  ngOnInit() {
    loginManager.getUser().then(user => {
        if (user) {
          this.user = user.profile.name;
        }
    }).catch(err => {
        alert(err);
    });
  }

  login() {
    loginManager.signinRedirect();
  }

  logout() {
    loginManager.signoutRedirect();
  }

}
