export class Sensor {
    _id: string;
    fecha: string;
    hora: string;
    sensor: string;

    constructor(_id = '', fecha = '', hora = '', sensor = '') {
        this._id = _id;
        this.fecha = fecha;
        this.hora = hora;
        this.sensor = sensor;
    }
}
