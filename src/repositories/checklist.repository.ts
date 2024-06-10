import { PrismaClient } from "@prisma/client";
import { Checklist } from "../entities/checklist.entity";

export class ChecklistRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(checklist: Checklist): Promise<Checklist> {
        return this.prisma.checklist.create({ data: checklist });
    }

    async findAll(): Promise<Checklist[]> {
        return this.prisma.checklist.findMany();
    }

    async findById(id: number): Promise<Checklist> {
        return this.prisma.checklist.findUnique({ where: { id } });
    }

    async findByDemandaId(id_demanda: number): Promise<Checklist[]> {
        return this.prisma.checklist.findMany({ where: { id_demanda } });
    }

    async update(id: number, checklist: Checklist): Promise<Checklist> {
        return this.prisma.checklist.update({
            where: { id },
            data: checklist,
        });
    }

    async delete(id: number): Promise<Checklist> {
        return this.prisma.checklist.delete({ where: { id } });
    }

}