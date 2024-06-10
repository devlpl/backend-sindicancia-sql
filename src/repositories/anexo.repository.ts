import { PrismaClient } from "@prisma/client";
import { Anexo } from "@prisma/client";

export class AnexoRepository {
    
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // async create(data: Anexo): Promise<Anexo> {
    //     return await this.prisma.anexo.create({ data });
    // }

    async findAll(): Promise<Anexo[]> {
        return await this.prisma.anexo.findMany();
    }

    async findOne(id: number): Promise<Anexo> {
        return await this.prisma.anexo.findUnique({ where: { id } });
    }

    // async update(id: number, data: Anexo): Promise<Anexo> {
    //     return await this.prisma.anexo.update({ where: { id }, data });
    // }

    // async delete(id: number): Promise<Anexo> {
    //     return await this.prisma.anexo.delete({ where: { id } });
    // }
}