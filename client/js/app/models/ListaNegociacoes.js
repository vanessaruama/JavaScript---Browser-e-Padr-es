class ListaNegociacoes {
    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        //Proteger a lista com uma cópia para não mudar a original
        return [].concat(this._negociacoes);
    }
}