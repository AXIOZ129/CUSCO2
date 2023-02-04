import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { Sensor } from 'src/app/models/sensor';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

declare var CanvasJS: any;

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers:[SensorService]
})
export class EstadisticasComponent implements OnInit {

  constructor(public sensorService: SensorService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  cambiarGrafic() {
    var grafica = 'column'

    if (grafica == 'column') {
      grafica = 'bar'
      if (grafica == 'bar') {
        grafica = 'column'
      }
    }
    return grafica;

  }

  getDatos() {
    var grafica = 'column';
    //this.cambiarGrafic(grafica)
    
    var pastel = 'pie';
    var entradas = 0, dias = 0;
    this.sensorService.getDatos().subscribe(res => {
      this.sensorService.sensor = res as Sensor[];

      for (var i = 0; i < this.sensorService.sensor.length; i++) {
        if (this.sensorService.sensor[i].sensor == 'entrando') {
          entradas++;
          dias++;
        }
      }

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
          text: ""
        },
        axisY: {
          title: "Entradas"
        },
        axisX: {
          title: "15/08/2021"
        },
        data: [{

          type: grafica, //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelFontSize: 16,
          indexLabelPlacement: "outside",
          toolTipContent: "<b>{label}</b>: {y}",
          dataPoints: [
            { y: entradas, label: "Entradas" },
          ]
        }]
      });
      chart.render();
    });
  }
}
