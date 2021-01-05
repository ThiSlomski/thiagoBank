declare var $: any;

abstract class View<T> {

    private _elemento: any;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    clearElement() {
        this._elemento.html(this.templateEmpty());
    }

    abstract template(model: T): string;

    abstract templateEmpty(): string;

}