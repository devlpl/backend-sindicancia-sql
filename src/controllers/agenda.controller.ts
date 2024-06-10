import { Controller, Post, Get, Put, Delete, Body, Param } from "@nestjs/common";
import { AgendaService } from "src/services/agenda.service";
import { ApiOperation, ApiResponse, ApiTags, } from "@nestjs/swagger";
import { Agenda } from "src/entities/agenda.entity";

@ApiTags('Agenda')
@Controller('agenda')
export class AgendaController {
    constructor(private agendaService: AgendaService) { }

    @Get()
    @ApiOperation({ summary: 'Listagem de agendas.' })
    @ApiResponse({ status: 200, description: 'Listagem de agendas.' })
    async findAll(): Promise<Agenda[]> {
        return await this.agendaService.findAll();
    }

    @Get('id/:id')
    @ApiOperation({ summary: 'Busca de agenda por ID.' })
    @ApiResponse({ status: 200, description: 'Agenda encontrada.' })
    async findOne(@Param('id') id: string): Promise<Agenda> {
        return await this.agendaService.findOne(id);
    }

    @Get('demanda/:id')
    @ApiOperation({ summary: 'Busca de agenda por ID da demanda.' })
    @ApiResponse({ status: 200, description: 'Agendas encontradas.' })
    async findByDemandaId(@Param('id') id: string): Promise<Agenda[]> {
        return await this.agendaService.findByDemandaId(id);
    }

    @Post()
    @ApiOperation({ summary: 'Criação de agenda.' })
    @ApiResponse({ status: 201, description: 'Agenda criada.' })
    async create(@Body() agenda: Agenda): Promise<Agenda> {
        return await this.agendaService.create(agenda);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualização de agenda.' })
    @ApiResponse({ status: 200, description: 'Agenda atualizada.' })
    async update(@Param('id') id: string, @Body() agenda: Agenda): Promise<Agenda> {
        return await this.agendaService.update(id, agenda);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Exclusão de agenda.' })
    @ApiResponse({ status: 200, description: 'Agenda excluída.' })
    async delete(@Param('id') id: string): Promise<void> {
        return await this.agendaService.delete(id);
    }
}