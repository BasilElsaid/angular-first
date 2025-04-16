export class Prodotto {
    codice: string | undefined;
    nome: string | undefined;
    descrizione: string | undefined;
    prezzo: number | undefined;
    quantita: number | undefined; 
    id: string = '';

    constructor(    
        cod: string | undefined,
        nom: string | undefined,
        des: string | undefined,
        pre: number | undefined,
        qua: number | undefined
    ){
        this.codice = cod;
        this.nome = nom;
        this.descrizione = des;
        this.prezzo = pre;
        this.quantita = qua;
    }
}
