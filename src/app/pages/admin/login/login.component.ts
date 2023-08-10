import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dataemail = new FormControl('', [Validators.required, Validators.email]);
  datapassword = new FormControl('', [Validators.required, Validators.minLength(4)]);
  constructor(
    public authService: AuthService
    //public loginService: LoginService,private fb: FormBuilder
    ){
     
    }
   
   login(){
    this.authService.login(this.dataemail.value, this.datapassword.value);
    //this.loginService.login(this.dataemail.value, this.datapassword.value);
   }
   
   AuthLogin(){
    this.authService.GoogleAuth();
   }
   
}
