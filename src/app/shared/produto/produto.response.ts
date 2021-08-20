import { IResourceResponse } from '@app/shared/resource/resource.response';

export interface IProdutoResponse extends IResourceResponse {
     codigo: number;
     nome: string;
     flHabilitado: boolean;
}
