import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private strUrlApi:string;

  constructor(private http:HttpClient, private router:Router) { 
    this.strUrlApi = '../../assets/data/user.json';
  }
  public loginSimple(email:string, pwd:string): void {
    this.http.get(this.strUrlApi).subscribe(
      (response:any) => {
        if(response.token != null){
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

  public logout():void{ 
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  public isUserLogin(): boolean{
    return (localStorage.getItem('token') != null);
  }
}
