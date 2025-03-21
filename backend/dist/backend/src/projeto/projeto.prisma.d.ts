import { PrismaProvider } from 'src/db/prisma.provider';
import { Projeto } from '@core';
export declare class ProjetoPrisma {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    obterTodos(): Promise<Projeto[]>;
    obterPorId(id: number): Promise<Projeto | null>;
}
