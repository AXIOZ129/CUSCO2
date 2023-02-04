import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedAuth: Auth;
  readonly URL = 'https://cuscoapi.herokuapp.com/api/password';
  auth: Auth;
  auth2: Auth[];

  constructor(private http: HttpClient, private router: Router) {
    this.auth = new Auth();
    this.selectedAuth = new Auth;
    this.auth2 = [];
  }
  getDatos() {
    return this.http.get(this.URL);
  }

  signIn(auth: any) {
    return this.http.post<any>(this.URL + '/signin', auth);
  }
  //funcion para guardar los token de las cookies
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  //Funcion para cerrar sesion
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
