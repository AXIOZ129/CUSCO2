import { Injectable } from '@angular/core';
import { Sensor } from '../models/sensor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  selectedSensor: Sensor;
  sensor: Sensor[];
  readonly URL_API = 'https://cuscoapi.herokuapp.com/api/sensor';

  constructor(private http: HttpClient) {
    this.sensor = [];
    this.selectedSensor = new Sensor();
  }
  getDatos(){
    return this.http.get(this.URL_API);
  }
}
