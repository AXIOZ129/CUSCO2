import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { Sensor } from 'src/app/models/sensor';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [SensorService],
})
export class HistorialComponent implements OnInit {

  constructor(public sensorService: SensorService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this.sensorService.getDatos().subscribe(res =>{
      this.sensorService.sensor = res as Sensor[];
    });
  }

}
