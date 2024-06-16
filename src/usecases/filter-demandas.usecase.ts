import { Injectable, HttpException } from "@nestjs/common";
import { Demanda } from "@prisma/client";
import { DemandaRepository } from "../repositories/demanda.repository";
import { FilterDemandasDto } from "src/dto/filter-demandas.dto";

@Injectable()
export class FilterDemandasUsecase {
    constructor(private demandaRepository: DemandaRepository) { }

    async execute(filters: FilterDemandasDto): Promise<Demanda[]> {
        return this.demandaRepository.findDemandasByFilter(filters);
    }
}
