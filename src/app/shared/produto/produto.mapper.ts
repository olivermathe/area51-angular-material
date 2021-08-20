import { Injectable } from '@angular/core';
import { ResourceMapper } from '@app/shared/resource/resource.mapper';
import { Produto } from './produto';
import { IProdutoBody } from './produto.body';
import { IProdutoResponse } from './produto.response';

@Injectable()
export class ProdutoMapper extends ResourceMapper<Produto, IProdutoResponse, IProdutoBody> {

    constructor() {
        super();
    }

    fromResponse(response: IProdutoResponse): Produto {
        return new Produto(
            response.codigo,
            response.nome,
            response.flHabilitado
        );
    }

}
