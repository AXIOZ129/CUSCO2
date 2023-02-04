import { Injectable } from '@angular/core';
import { Sensor } from '../models/sensor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  selectedSensor: Sensor;
  sensor: Sensor[];
  readonly URL_API = 'https://webcusco1.herokuapp.com/api/sensor';

  constructor(private http: HttpClient) {
    this.selectedSensor = new Sensor();
    this.sensor = [];
  }

  //Funcion para obtener datos
  getDatos(){
    return this.http.get(this.URL_API);
  }

  //Funcion para hacer update a la clave
  updatePassword(sensor: Sensor){
    return this.http.put(this.URL_API + `/${sensor._id}`, sensor);
  }

}
