class DateHelper {

    constructor() {
        //Lançar um erro
        throw new Error('DateHelper não pode ser instânciada')
    }

    static dataParaTexto(data){
        return data.getDate() 
            + '/' + (data.getMonth() + 1) 
            + '/' + data.getFullYear()
    }

    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}