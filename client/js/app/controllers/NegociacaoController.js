class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {
        event.preventDefault();
        
        //2016-11-12
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map(function(item, indice){
                    return item - indice % 2
                })
        );
        console.log(data);
        console.log(typeof(data));

    }

    //adicionar a negocição em uma lista
}