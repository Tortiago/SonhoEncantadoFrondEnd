export class EnderecoModel implements Deserializable{
    public cep: string;
    public cidade: string;
    public bairro: string;
    public logradouro: string;
    public numero: string;
    public pontoReferencia: string;

    constructor(){ };

    builder(
        cep: string,
        cidade: string,
        bairro: string,
        logradouro: string,
        numero: string,
        pontoReferencia: string){

            let model = new EnderecoModel();

            model.cep = cep;
            model.cidade = cidade;
            model.bairro = bairro;
            model.logradouro = logradouro;
            model.numero = numero;
            model.pontoReferencia = pontoReferencia;
            return model;
    }

    Deserializable(input: any): this{
        return Object.assign(this, input);
    }
}

export interface Deserializable{
    Deserializable(input: any): this;
}