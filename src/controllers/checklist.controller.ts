import { Controller, Body, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { ChecklistService } from "../services/checklist.service";
import { Checklist } from "../entities/checklist.entity";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("checklist")
@Controller("checklist")
export class ChecklistController {

    constructor(private checklistService: ChecklistService) { }

    @Post()
    @ApiOperation({ summary: "Cria novo checklist" })
    @ApiResponse({ status: 201, description: "Checklist Criado" })
    async create(@Body() checklist: Checklist): Promise<Checklist> {
        return this.checklistService.create(checklist);
    }

    @Get()
    @ApiOperation({ summary: "Lista todos os checklists" })
    @ApiResponse({ status: 200, description: "Checklists listados" })
    async findAll(): Promise<Checklist[]> {
        return this.checklistService.findAll();
    }

    @Get("id/:id")
    @ApiOperation({ summary: "Busca checklist por id" })
    @ApiResponse({ status: 200, description: "Checklist encontrado" })
    @ApiResponse({ status: 404, description: "Checklist não encontrado" })
    async findById(@Param("id") id: number): Promise<Checklist> {
        return this.checklistService.findById(id);
    }

    @Get("demanda/:id_demanda")
    @ApiOperation({ summary: "Busca checklists por id_demanda" })
    @ApiResponse({ status: 200, description: "Checklists encontrados" })
    async findByDemandaId(@Param("id_demanda") id_demanda: number): Promise<Checklist[]> {
        return this.checklistService.findByDemandaId(id_demanda);
    }

    @Put(":id")
    @ApiOperation({ summary: "Atualiza checklist por id" })
    @ApiResponse({ status: 200, description: "Checklist atualizado" })
    @ApiResponse({ status: 404, description: "Checklist não encontrado" })
    async update(@Param("id") id: number, @Body() checklist: Checklist): Promise<Checklist> {
        return this.checklistService.update(id, checklist);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Deleta checklist por id" })
    @ApiResponse({ status: 200, description: "Checklist deletado" })
    @ApiResponse({ status: 404, description: "Checklist não encontrado" })
    async delete(@Param("id") id: number): Promise<Checklist> {
        return this.checklistService.delete(id);
    }
}