import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage} from "../login/login.page"


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLogin(){
    this.router.navigate(['/login'])
  }

}
