import { Component, OnInit } from '@angular/core';
import * as Oidc from 'oidc-client';
import { Router } from '@angular/router';
import { loginManager } from '../../app.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    async login() {
        loginManager.signinRedirect();
    }
}
