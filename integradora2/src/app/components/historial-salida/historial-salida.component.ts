import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { Sensor} from 'src/app/models/sensor'; 

@Component({
  selector: 'app-historial-salida',
  templateUrl: './historial-salida.component.html',
  styleUrls: ['./historial-salida.component.css'],
  providers: [SensorService]
})
export class HistorialSalidaComponent implements OnInit {

  constructor(public sensorService: SensorService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){
    this.sensorService.getDatos().subscribe(res => {
      this.sensorService.sensor = res as Sensor[];
    });
  }
}
