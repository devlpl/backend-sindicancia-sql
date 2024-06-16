import { IsString, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FilterDemandasDto {
    @ApiProperty({ example: '10', description: 'Quantidade de demandas a serem retornadas', required: false })
    @IsOptional()
    @IsString()
    limit?: string = '10';

    @ApiProperty({ example: '1', description: 'Índice da pagina onde começar a busca', required: false })
    @IsOptional()
    @IsString()
    page?: string = '1';

    @ApiProperty({ example: '1', description: 'ID da empresa', required: false })
    @IsOptional()
    @IsString()
    areaEmpresa?: string;

    @ApiProperty({ example: '1', description: 'ID do status', required: false })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ example: '1', description: 'ID do tipo de serviço', required: false })
    @IsOptional()
    @IsString()
    servico?: string;

    @ApiProperty({ example: '1', description: 'ID do analista', required: false })
    @IsOptional()
    @IsString()
    analista?: string;

    @ApiProperty({ example: '202400230', description: 'Codigo da demanda', required: false })
    @IsOptional()
    @IsString()
    codigo?: string;

    @ApiProperty({ example: '2024-01-04', description: 'Data de criação da demanda', required: false })
    @IsOptional()
    @IsString()
    data?: string;
}