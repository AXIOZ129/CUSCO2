import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { Limite } from 'src/app/models/limite';
import { DatosService } from 'src/app/services/datos.service';



@Component({
  selector: 'app-ajuste',
  templateUrl: './ajuste.component.html',
  styleUrls: ['./ajuste.component.css'],
  providers: [DatosService]
})
export class AjusteComponent implements OnInit {

  constructor(public datosService: DatosService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this.datosService.getDatos().subscribe(res => {
      this.datosService.limite = res as Limite[];
      //console.log(this.datosService.limite[0]);
      (<HTMLElement>document.getElementById("limite")).innerHTML = this.datosService.limite[0].limite.toString();
    });
  }



  updateLimite() {
    var cambiar = (<HTMLInputElement>document.getElementById("cambiar")).value;
    this.datosService.updateLimite(parseInt(cambiar)).subscribe(res =>{});
  }
}

