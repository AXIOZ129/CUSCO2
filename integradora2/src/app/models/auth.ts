export class Auth {
    _id: string;
    password: string;
    
    constructor(_id = '', password = '') {
        this._id = _id;
        this.password = password;

    }
}
