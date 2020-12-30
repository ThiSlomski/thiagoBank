class MensagemView extends View<string> {

    template(model: string): string {
        return `<p id="alertaGerado" class="alert alert-info">${model}</p>`;
    }

    templateEmpty(){
        return ``;
    }

}