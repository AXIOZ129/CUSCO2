import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-historial-entrada',
  templateUrl: './historial-entrada.component.html',
  styleUrls: ['./historial-entrada.component.css'],
  providers: [SensorService]
})
export class HistorialEntradaComponent implements OnInit {

  constructor(public sensorService: SensorService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this.sensorService.getDatos().subscribe(res => {
      this.sensorService.sensor = res as Sensor[];
    });
  }
}

