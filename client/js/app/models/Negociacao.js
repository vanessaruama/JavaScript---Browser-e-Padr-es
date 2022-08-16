// _ convenção para que as propriedades sejam acessadas apenas pela classe

class Negociacao {

    constructor(data, quantiade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantiade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return  new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}