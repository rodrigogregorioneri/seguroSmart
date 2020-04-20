import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  registerCredentials = { email: '', password: '' };

  constructor(private router: Router) { }

  ngOnInit() {
  }



  openHome(){
    this.router.navigate(['/home'])
  }

  openCadastro(){
    this.router.navigate(['/cadastro'])
  }

}
