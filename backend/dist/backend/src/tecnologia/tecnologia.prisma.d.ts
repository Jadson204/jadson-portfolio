import { Tecnologia } from '@core';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class TecnologiaPrisma {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    obterTodas(): Promise<Tecnologia[]>;
    obterDestaques(): Promise<Tecnologia[]>;
}
