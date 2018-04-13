import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginManager } from '../../app.module';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
  user: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    loginManager.getUser().then(user => {
      alert(user);
        if (user) {
          this.user = user.profile.name;
        }
    }).catch(err => {
        alert(err);
    });
  }

}
