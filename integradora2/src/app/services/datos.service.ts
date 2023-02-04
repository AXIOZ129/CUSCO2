import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/auth';
import { Limite } from '../models/limite';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  selectedDatos: Limite;
  limite: Limite[];
  readonly Link = 'https://cuscoapi.herokuapp.com/api/datos';
  //http://localhost:3000/api/datos
  constructor(private http: HttpClient, private router: Router) {
    this.limite = [];
    this.selectedDatos = new Limite();
  }

  getDatos(){
    return this.http.get(this.Link);
  }

  updateLimite(limit:Number){
    return this.http.put(this.Link + `/${limit}`, limit);
  }

}
