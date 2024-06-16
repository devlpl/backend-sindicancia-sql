import { Injectable, HttpException } from "@nestjs/common";
import { Demanda } from "@prisma/client"; 
import { DemandaRepository } from "../repositories/demanda.repository";

@Injectable()
export class DemandaService {
    constructor(private demandaRepository: DemandaRepository) { }

    async create(demanda: Demanda): Promise<Demanda> {
        return this.demandaRepository.create(demanda);
    }

    async findAll(): Promise<Demanda[]> {
        return this.demandaRepository.findAll();
    }

    async findById(id: string): Promise<Demanda> {
        const demanda = await this.demandaRepository.findById(parseInt(id));
        if (!demanda) {
            throw new HttpException("Demanda not found", 404);
        }
        return demanda;
    }

    async findByEmpresaId(id_empresa: number): Promise<Demanda[]> {
        return this.demandaRepository.findByEmpresaId(id_empresa);
    }

    async update(id: number, demanda: Demanda): Promise<Demanda> {
        const demandaExists = await this.demandaRepository.findById(id);
        if (!demandaExists) {
            throw new HttpException("Demanda not found", 404);
        }
        return this.demandaRepository.update(id, demanda);
    }

    async delete(id: number): Promise<Demanda> {
        const demandaExists = await this.demandaRepository.findById(id);
        if (!demandaExists) {
            throw new HttpException("Demanda not found", 404);
        }
        return this.demandaRepository.delete(id);
    }
}