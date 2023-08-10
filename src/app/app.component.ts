import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CGI';
  isLoggedIn = false;
  constructor(private router: Router,
    public authService: AuthService) {

    }

  ngOnInit(): void {}

  getClassForRoute(route: string): string {
    return this.router.url.includes(route) ? 'active' : '';
  }

  /*check(){
    if(this.authService.isLoggedIn
  }*/
  Cerrar(){
    this.authService.SignOut();
    this.router.navigate(['login']);
  }


}
