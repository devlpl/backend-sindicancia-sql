import { Controller, Param, Get, Query } from "@nestjs/common";
import { DemandaService } from "../services/demanda.service";
import { FilterDemandasUsecase } from "src/usecases/filter-demandas.usecase";
import { Demanda } from "@prisma/client";
import { FilterDemandasDto } from "src/dto/filter-demandas.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("demanda")
@Controller("demanda")
export class DemandaController {

    constructor(
        private demandaService: DemandaService,
        private filterDemandasUsecase: FilterDemandasUsecase
    ) { }

    @Get()
    @ApiOperation({ summary: "Lista todas as demandas" })
    @ApiResponse({ status: 200, description: "Demandas listadas" })
    async findAll(): Promise<Demanda[]> {
        return this.demandaService.findAll();
    }

    @Get("id/:id")
    @ApiOperation({ summary: "Busca demanda por id" })
    @ApiResponse({ status: 200, description: "Demanda encontrada" })
    @ApiResponse({ status: 404, description: "Demanda não encontrada" })
    async findById(@Param("id") id: string): Promise<Demanda> {
        return this.demandaService.findById(id);
    }

    @Get("empresa/:id_empresa")
    @ApiOperation({ summary: "Busca demandas por id_empresa" })
    @ApiResponse({ status: 200, description: "Demandas encontradas" })
    async findByEmpresaId(@Param("id_empresa") id_empresa: number): Promise<Demanda[]> {
        return this.demandaService.findByEmpresaId(id_empresa);
    }

    @Get("filter")
    @ApiOperation({ summary: "Busca demandas por filtro" })
    @ApiResponse({ status: 200, description: "Demandas encontradas" })
    async findByFilter(@Query() filters: FilterDemandasDto): Promise<Demanda[]> {
        return this.filterDemandasUsecase.execute(filters);
    }

}