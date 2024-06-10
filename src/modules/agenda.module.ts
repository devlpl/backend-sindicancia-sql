import { Module } from "@nestjs/common";
import { AgendaService } from "src/services/agenda.service";
import { AgendaRepository } from "src/repositories/agenda.repository";
import { AgendaController } from "src/controllers/agenda.controller";

@Module({
    controllers: [AgendaController],
    providers: [AgendaService, AgendaRepository]
})
export class AgendaModule { }