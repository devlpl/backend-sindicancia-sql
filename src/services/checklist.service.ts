import { Injectable, HttpException } from "@nestjs/common";
import { Checklist } from "../entities/checklist.entity";
import { ChecklistRepository } from "../repositories/checklist.repository";

@Injectable()
export class ChecklistService {
    constructor(private checklistRepository: ChecklistRepository) { }

    async create(checklist: Checklist): Promise<Checklist> {
        return this.checklistRepository.create(checklist);
    }

    async findAll(): Promise<Checklist[]> {
        return this.checklistRepository.findAll();
    }

    async findById(id: number): Promise<Checklist> {
        const checklist = await this.checklistRepository.findById(id);
        if (!checklist) {
            throw new HttpException("Checklist not found", 404);
        }
        return checklist;
    }

    async findByDemandaId(id_demanda: number): Promise<Checklist[]> {
        return this.checklistRepository.findByDemandaId(id_demanda);
    }

    async update(id: number, checklist: Checklist): Promise<Checklist> {
        const checklistExists = await this.checklistRepository.findById(id);
        if (!checklistExists) {
            throw new HttpException("Checklist not found", 404);
        }
        return this.checklistRepository.update(id, checklist);
    }

    async delete(id: number): Promise<Checklist> {
        const checklistExists = await this.checklistRepository.findById(id);
        if (!checklistExists) {
            throw new HttpException("Checklist not found", 404);
        }
        return this.checklistRepository.delete(id);
    }
}