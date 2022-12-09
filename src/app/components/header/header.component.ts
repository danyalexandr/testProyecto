import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthorizationService) { }

  ngOnInit(): void {
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
  public btnLogout():void{
    this.auth.logout();
  }
}

