import { Module } from "@nestjs/common";
import { DemandaController } from "../controllers/demanda.controller";
import { DemandaService } from "../services/demanda.service";
import { DemandaRepository } from "../repositories/demanda.repository";
import { HelperModule } from "./helper.module";
import { FilterDemandasUsecase } from "src/usecases/filter-demandas.usecase";

@Module({
    imports:[HelperModule],
    controllers: [DemandaController],
    providers: [DemandaService, DemandaRepository, FilterDemandasUsecase],
})
export class DemandaModule {}