import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginManager } from '../../app.module';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
  loginDetails: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    loginManager.signinRedirectCallback().then((user) => {
      this.loginDetails = JSON.stringify(user, null, 4);
    });
  }

}
