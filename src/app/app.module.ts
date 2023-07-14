import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginApiCallService } from './providers/login/login-api-call.service';
import { PropertiesService } from './providers/properties/properties.service';
import { ConfigurationFilePathComponent } from './component/path/configuration-file-path/configuration-file-path.component';
import { LoginUserAuthenticationComponent } from './component/login/login-user-authentication/login-user-authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
const appRoutes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginUserAuthenticationComponent },
  { path: 'ConfigurationChange', component: ConfigurationFilePathComponent }
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
    HttpClientModule, 
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [
    LoginApiCallService,
    PropertiesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
