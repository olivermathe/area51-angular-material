import { FormControl } from "@angular/forms";
import { Produto } from './services/produto';

export class ProdutoFilter extends FormControl {

    constructor() {
        super();
    }

    get codigo(): number {
        const codigo = this.value.split(' - ').shift();
        return parseInt(codigo, 10);
    }

    get nome(): string {
        const nome = this.value.split(' - ').pop();
        return nome;
    }

    getProduto(): Produto {
        return new Produto(
            this.codigo,
            this.nome,
        );
    }

}
