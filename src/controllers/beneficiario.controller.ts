import { Controller, Body, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { BeneficiarioService } from "../services/beneficiario.service";
import { Beneficiario } from "../entities/beneficiario.entity";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("beneficiario")
@Controller("beneficiario")
export class BeneficiarioController {

    constructor(private beneficiarioService: BeneficiarioService) { }

    @Post()
    @ApiOperation({ summary: "Cria novo beneficiario" })
    @ApiResponse({ status: 201, description: "Beneficiario Criado" })
    async create(@Body() beneficiario: Beneficiario): Promise<Beneficiario> {
        return this.beneficiarioService.create(beneficiario);
    }

    @Get()
    @ApiOperation({ summary: "Lista todos os beneficiarios" })
    @ApiResponse({ status: 200, description: "Beneficiarios listados" })
    async findAll(): Promise<Beneficiario[]> {
        return this.beneficiarioService.findAll();
    }

    @Get("id/:id")
    @ApiOperation({ summary: "Busca beneficiario por id" })
    @ApiResponse({ status: 200, description: "Beneficiario encontrado" })
    @ApiResponse({ status: 404, description: "Beneficiario não encontrado" })
    async findById(@Param("id") id: number): Promise<Beneficiario> {
        return this.beneficiarioService.findById(id);
    }

    @Get("demanda/:id_demanda")
    @ApiOperation({ summary: "Busca beneficiarios por id_demanda" })
    @ApiResponse({ status: 200, description: "Beneficiarios encontrados" })
    async findByDemandaId(@Param("id_demanda") id_demanda: number): Promise<Beneficiario[]> {
        return this.beneficiarioService.findByDemandaId(id_demanda);
    }

    @Put(":id")
    @ApiOperation({ summary: "Atualiza beneficiario por id" })
    @ApiResponse({ status: 200, description: "Beneficiario atualizado" })
    @ApiResponse({ status: 404, description: "Beneficiario não encontrado" })
    async update(@Param("id") id: number, @Body() beneficiario: Beneficiario): Promise<Beneficiario> {
        return this.beneficiarioService.update(id, beneficiario);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Deleta beneficiario por id" })
    @ApiResponse({ status: 200, description: "Beneficiario deletado" })
    @ApiResponse({ status: 404, description: "Beneficiario não encontrado" })
    async delete(@Param("id") id: number): Promise<Beneficiario> {
        return this.beneficiarioService.delete(id);
    }
}