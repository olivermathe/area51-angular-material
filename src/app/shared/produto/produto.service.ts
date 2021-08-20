import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ResourceService } from '@app/shared/resource/resource.service';
import { BvErrorService, ConfigurationModel } from '@arqt/spa-framework';
import { Produto } from './produto';
import { IProdutoBody } from './produto.body';
import { ProdutoMapper } from './produto.mapper';
import { IProdutoResponse } from './produto.response';

@Injectable()
export class ProdutoService extends ResourceService<Produto, IProdutoResponse, IProdutoBody> {

    constructor(
        public mapper: ProdutoMapper,
        public http: HttpClient,
        @Inject('config') public config: ConfigurationModel,
        public errorService: BvErrorService
    ) {
        super(mapper, http, config, errorService);
    }

}
