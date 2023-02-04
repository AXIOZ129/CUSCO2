import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contador } from '../models/contador';


@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  selectedContador: Contador;
  readonly LINK = 'https://cuscoapi.herokuapp.com/api/contador';
  contador: Contador[];

  constructor(private http:HttpClient) { 
    this.contador = [];
    this.selectedContador = new Contador();
  }
  getContador(){
    return this.http.get(this.LINK);
  }
}
