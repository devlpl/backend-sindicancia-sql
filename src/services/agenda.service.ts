import { Injectable, HttpException } from "@nestjs/common";
import { Agenda } from "src/entities/agenda.entity";
import { AgendaRepository } from "src/repositories/agenda.repository";

@Injectable()
export class AgendaService {
     
    constructor(private agendaRepository: AgendaRepository) { }

    async findAll(): Promise<Agenda[]> {
        return await this.agendaRepository.findAll();
    }

    async findOne(id: string): Promise<Agenda> {
        const agenda = await this.agendaRepository.findOne(parseInt(id));
        if (!agenda) {
            throw new HttpException('Agenda não encontrada.', 404);
        }
        return agenda;
    }

    async findByDemandaId(demandaId: string): Promise<Agenda[]> {
        return await this.agendaRepository.findByDemandaId(parseInt(demandaId));
    }

    async create(agenda: Agenda): Promise<Agenda> {
        return await this.agendaRepository.create(agenda);
    }

    async update(id: string, agenda: Agenda): Promise<Agenda> {
        const agendaExists = await this.agendaRepository.findOne(parseInt(id));
        if (!agendaExists) {
            throw new HttpException('Agenda não encontrada.', 404);
        }
        return await this.agendaRepository.update(parseInt(id), agenda);
    }

    async delete(id: string): Promise<void> {
        const agendaExists = await this.agendaRepository.findOne(parseInt(id));
        if (!agendaExists) {
            throw new HttpException('Agenda não encontrada.', 404);
        }
        await this.agendaRepository.delete(parseInt(id));
    }
}
