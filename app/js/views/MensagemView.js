class MensagemView extends View {
    template(model) {
        return `<p id="alertaGerado" class="alert alert-info">${model}</p>`;
    }
    templateEmpty() {
        return ``;
    }
}
