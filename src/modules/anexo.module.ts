import { Module } from "@nestjs/common";
import { AnexoController } from "src/controllers/anexo.controller";
import { AnexoService } from "src/services/anexo.service";
import { AnexoRepository } from "src/repositories/anexo.repository";

@Module({
    controllers: [AnexoController],
    providers: [AnexoService, AnexoRepository]
})
export class AnexoModule { }