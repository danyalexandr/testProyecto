import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginTxtEmail:string;
  public loginTxtPwd:string;

  constructor(private auth:AuthorizationService) { 
    this.loginTxtEmail = "";
    this.loginTxtPwd = "";
  }

  ngOnInit(): void {
  }

  public btnLogin():void{
    this.auth.loginSimple(this.loginTxtEmail, this.loginTxtPwd);
  }

}
