export class Contador {
    _id: string;
    contador: string;

    constructor(_id = '', contador = ''){
        this._id = _id;
        this.contador = contador;
    }
}
