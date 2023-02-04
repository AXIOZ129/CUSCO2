import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getToken()){
      this.router.navigate(['/home']);
    }
  }
  //cambiar el service y el modelado por el de la contraseña
  signin(form?: NgForm){
    if(form){
      this.authService.signIn(form.value).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        err => {
          M.toast({html: err.error});
        }
      );
    }
  }

}
