import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { Contador } from 'src/app/models/contador';
import { Limite } from 'src/app/models/limite';
import { AuthService } from 'src/app/services/auth.service';
import { ContadorService } from 'src/app/services/contador.service';
import { DatosService } from 'src/app/services/datos.service';
import { LimiteService } from 'src/app/services/limite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService, DatosService, ContadorService]
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, 
    public datosService: DatosService, 
    public contadorService: ContadorService) { }

  ngOnInit(): void {
    this.getDatos();
    this.getDatosContador();
  }

  getDatosContador(){
    this.contadorService.getContador().subscribe(res => {
      this.contadorService.contador = res as Contador[];
      console.log(this.contadorService.contador[0]);
      (<HTMLElement>document.getElementById("pe")).innerHTML = this.contadorService.contador[0].contador;
    });
  }

  getDatos(){
    this.datosService.getDatos().subscribe(res => {
      this.datosService.limite = res as Limite[];
      console.log(this.datosService.limite[0]);
      (<HTMLElement>document.getElementById("limite")).innerHTML = this.datosService.limite[0].limite.toString();
    });
  }
  logout(){
    this.authService.logOut();
  }
}
