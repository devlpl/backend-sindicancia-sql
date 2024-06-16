import { PrismaClient } from "@prisma/client";
import { Demanda } from "@prisma/client";
import { FilterDemandasDto } from "src/dto/filter-demandas.dto";
import { HelperService } from "src/services/helper.service";

export class DemandaRepository {

    private prisma: PrismaClient;
    private helperService = new HelperService();

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(demanda: Demanda): Promise<Demanda> {
        return this.prisma.demanda.create({ data: demanda });
    }

    async findAll(): Promise<Demanda[]> {
        return this.prisma.demanda.findMany();
    }

    async findById(id: number): Promise<Demanda> {
        const result = await this.prisma.demanda.findUnique({ where: { id } });
        return this.helperService.transformBigIntToString(result);
    }

    async findByEmpresaId(id_empresa: number): Promise<Demanda[]> {
        return this.prisma.demanda.findMany({ where: { empresa_id: id_empresa } });
    }

    async findDemandasByFilter(filters: FilterDemandasDto): Promise<Demanda[]> {
        const { analista, areaEmpresa, codigo, data, limit, page, servico, status } = filters;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const query = []
        if (analista) query.push({
            OR: [
                { usuario_criador_id: parseInt(analista) },
                { usuario_distribuicao_id: parseInt(analista) }
            ]
        });
        if (areaEmpresa) query.push({
            AreaEmpresa: {
                id: parseInt(areaEmpresa)
            }
        });
        if (codigo) query.push({ codigo });
        if (servico) query.push({
            TipoServico: {
                id: parseInt(servico)
            }
        });
        if (status) query.push({
            Status: {
                id: parseInt(status)
            }
        });
        if (data) query.push({
            data_criacao: {
                gte: new Date(data)
            }
        });
        const demandas = await this.prisma.demanda.findMany({
            where: {
                AND: query
            },
            skip,
            take: parseInt(limit),
            include: {
                AreaEmpresa: true,
                TipoServico: true,
                Status: true,
                Usuario_Demanda_usuario_criador_idToUsuario: true,
                Usuario_Demanda_usuario_distribuicao_idToUsuario: true,
                Empresa: true
            }
        });
        return demandas.map(demanda => this.helperService.transformBigIntToString(demanda));
    }

    async update(id: number, demanda: Demanda): Promise<Demanda> {
        return this.prisma.demanda.update({
            where: { id },
            data: demanda,
        });
    }

    async delete(id: number): Promise<Demanda> {
        return this.prisma.demanda.delete({ where: { id } });
    }

}