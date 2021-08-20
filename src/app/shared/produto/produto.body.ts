import { IResourceBody } from '@app/shared/resource/resource.body';

export interface IProdutoBody extends IResourceBody {
    flHabilitado: boolean;
    codigo: number;
}
