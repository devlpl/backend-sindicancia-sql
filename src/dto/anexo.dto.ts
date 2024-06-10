import { ApiProperty } from "@nestjs/swagger";

export class AnexoDto {
    @ApiProperty({ example: 1, description: 'Identificador único do anexo' })
    id: number;

    @ApiProperty({ example: '~/Anexo/teste.pdf', description: 'Caminho do anexo' })
    caminho: string;

    @ApiProperty({ example: 1, description: 'Identificador único do usuário' })
    usuario_id: number;

    @ApiProperty({ example: '2019-04-29T15:14:01.603Z', description: 'Data e hora do anexo' })
    data_hora: Date;

    @ApiProperty({ example: 'arquivo', description: 'Nome do arquivo' })
    arquivo: string;
}