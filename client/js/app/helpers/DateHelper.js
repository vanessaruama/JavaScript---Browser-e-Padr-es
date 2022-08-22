class DateHelper {

    constructor() {
        //Lançar um erro
        throw new Error('DateHelper não pode ser instânciada')
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto){
        //Expressão regular = \d considera números
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}