import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import * as Oidc from 'oidc-client';
import { HomeComponent } from './components/home/home.component';

const config = {
    authority: 'http://localhost:5000',
    client_id: 'openIdConnectClient',
    redirect_uri: 'http://localhost:4200/login/success',
    response_type: 'id_token token',
    scope: 'openid profile',
    post_logout_redirect_uri : 'http://localhost:4200',
};
export const loginManager = new Oidc.UserManager(config);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginSuccessComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'login/success',
                component: LoginSuccessComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
