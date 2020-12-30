class MensagemView extends View {
    removeAlert() {
        this._elemento.innerHTML = this.templateEmpty();
    }
    template(model) {
        return `<p id="alertaGerado" class="alert alert-info">${model}</p>`;
    }
    templateEmpty() {
        return ``;
    }
}
