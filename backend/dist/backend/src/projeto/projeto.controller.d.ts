import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';
export declare class ProjetoController {
    private readonly repo;
    constructor(repo: ProjetoPrisma);
    obterTodos(): Promise<Projeto[]>;
    obterPorId(id: string): Promise<Projeto | null>;
}
