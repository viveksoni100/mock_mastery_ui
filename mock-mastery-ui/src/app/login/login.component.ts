import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus!: boolean;
  focus1!: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  callOauthGoogleAPI() {
    console.log('clicked!');
    // this.router.navigateByUrl('http://localhost:9090/mock-mastery/OAuth/signInOAuthGoogle');
    // window.location.href = 'http://localhost:9090/mock-mastery/OAuth/signInOAuthGoogle';
    window.location.href = 'http://localhost:9090/mock-mastery/login';
  }
}
