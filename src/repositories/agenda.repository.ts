import { PrismaClient } from "@prisma/client";
import { Agenda } from "@prisma/client";

export class AgendaRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: Agenda): Promise<Agenda> {
        return await this.prisma.agenda.create({ data });
    }

    async findAll(): Promise<Agenda[]> {
        return await this.prisma.agenda.findMany();
    }

    async findOne(id: number): Promise<Agenda> {
        return await this.prisma.agenda.findUnique({ where: { id } });
    }

    async findByDemandaId(id_demanda: number): Promise<Agenda[]> {
        return await this.prisma.agenda.findMany({ where: { id_demanda } });
    }

    async update(id: number, data: Agenda): Promise<Agenda> {
        return await this.prisma.agenda.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Agenda> {
        return await this.prisma.agenda.delete({ where: { id } });
    }
}