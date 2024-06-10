import { Injectable, HttpException } from "@nestjs/common";
import { Beneficiario } from "../entities/beneficiario.entity";
import { BeneficiarioRepository } from "../repositories/beneficiario.repository";

@Injectable()
export class BeneficiarioService {
    constructor(private beneficiarioRepository: BeneficiarioRepository) { }

    async create(beneficiario: Beneficiario): Promise<Beneficiario> {
        return this.beneficiarioRepository.create(beneficiario);
    }

    async findAll(): Promise<Beneficiario[]> {
        return this.beneficiarioRepository.findAll();
    }

    async findById(id: number): Promise<Beneficiario> {
        const beneficiario = await this.beneficiarioRepository.findById(id);
        if (!beneficiario) {
            throw new HttpException("Beneficiario not found", 404);
        }
        return beneficiario;
    }

    async findByDemandaId(id_demanda: number): Promise<Beneficiario[]> {
        return this.beneficiarioRepository.findByDemandaId(id_demanda);
    }

    async update(id: number, beneficiario: Beneficiario): Promise<Beneficiario> {
        const beneficiarioExists = await this.beneficiarioRepository.findById(id);
        if (!beneficiarioExists) {
            throw new HttpException("Beneficiario not found", 404);
        }
        return this.beneficiarioRepository.update(id, beneficiario);
    }

    async delete(id: number): Promise<Beneficiario> {
        const beneficiarioExists = await this.beneficiarioRepository.findById(id);
        if (!beneficiarioExists) {
            throw new HttpException("Beneficiario not found", 404);
        }
        return this.beneficiarioRepository.delete(id);
    }
}