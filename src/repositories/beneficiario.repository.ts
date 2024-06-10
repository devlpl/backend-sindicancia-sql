import { PrismaClient } from "@prisma/client";
import { Beneficiario } from "../entities/beneficiario.entity";

export class BeneficiarioRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(beneficiario: Beneficiario): Promise<Beneficiario> {
        return this.prisma.beneficiario.create({ data: beneficiario });
    }

    async findAll(): Promise<Beneficiario[]> {
        return this.prisma.beneficiario.findMany();
    }

    async findById(id: number): Promise<Beneficiario> {
        return this.prisma.beneficiario.findUnique({ where: { id } });
    }

    async findByDemandaId(id_demanda: number): Promise<Beneficiario[]> {
        return this.prisma.beneficiario.findMany({ where: { id_demanda } });
    }

    async update(id: number, beneficiario: Beneficiario): Promise<Beneficiario> {
        return this.prisma.beneficiario.update({
            where: { id },
            data: beneficiario,
        });
    }

    async delete(id: number): Promise<Beneficiario> {
        return this.prisma.beneficiario.delete({ where: { id } });
    }
}