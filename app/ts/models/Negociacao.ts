class Negociacao {

    // no tipeScript deve se definir no topo, antes do constructor
   private _data;
   private _quantidade;
   private _valor;

    constructor(data,quantidade,valor) {

        if(!data){
            throw new Error('data deve ser preenchida');
        };

        if(!quantidade){
            throw new Error('quantidade deve ser preenchida');
        };

        if(!valor){
            throw new Error('valor deve ser preenchido');
        };

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}