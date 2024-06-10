import { Controller, Get, Param } from "@nestjs/common";
import { AnexoService } from "src/services/anexo.service";
import { Anexo } from "src/entities/anexo.entity";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { AnexoDto } from "src/dto/anexo.dto";

@ApiTags('Anexo')
@Controller('anexo')
export class AnexoController {
    constructor(private anexoService: AnexoService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Anexos encontrados com sucesso.', type: AnexoDto, isArray: true })
    async findAll(): Promise<Anexo[]> {
        return await this.anexoService.findAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Anexo encontrado com sucesso.', type: AnexoDto })
    @ApiResponse({ status: 404, description: 'Anexo não encontrado.' })
    async findOne(@Param('id') id: string): Promise<Anexo> {
        return await this.anexoService.findOne(id);
    }
}