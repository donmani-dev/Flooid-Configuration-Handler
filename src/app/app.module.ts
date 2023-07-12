import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginApiCallService } from './providers/login/login-api-call.service';
import { ConfigurationFilePathComponent } from './component/path/configuration-file-path/configuration-file-path.component';
import { LoginUserAuthenticationComponent } from './component/login/login-user-authentication/login-user-authentication.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginUserAuthenticationComponent },
  { path: 'Path', component: ConfigurationFilePathComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ConfigurationFilePathComponent,
    LoginUserAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    LoginApiCallService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
