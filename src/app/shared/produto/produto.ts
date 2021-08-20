import { Resource } from '@app/shared/resource/resource';

export class Produto implements Resource {

    constructor(
        public codigo: number,
        public nome: string,
        public habilitado: boolean = true
    ) {}

}
