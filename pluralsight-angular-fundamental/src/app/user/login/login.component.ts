import { IUser } from './../IUser';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user :any
  // userPassword:any;
  // userName:any;
  constructor(private authservice : AuthService) { }

  ngOnInit() {
  }
  login(formValues){
    console.log(this.user);
    // this.authservice.loginUser(formValues.userName, formValues.userPassword)
  }

}
