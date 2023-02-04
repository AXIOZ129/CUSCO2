export class Sensor {
    _id: string;
    password: string;
    limite: string;
    fecha: string;
    hora: string;
    sensor: string;

    constructor(_id = '', password = '', limite = '', fecha = '', hora = '', sensor = '') {
        this._id = _id;
        this.password = password;
        this.limite = limite;
        this.fecha = fecha;
        this.hora = hora;
        this.sensor = sensor;
    }
}
