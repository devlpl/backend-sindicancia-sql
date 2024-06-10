import { HttpException, Injectable } from "@nestjs/common";
import { AnexoRepository } from "src/repositories/anexo.repository";
import { Anexo } from "src/entities/anexo.entity";

@Injectable()
export class AnexoService {
    constructor(private anexoRepository: AnexoRepository) { }

    async findAll(): Promise<Anexo[]> {
        return await this.anexoRepository.findAll();
    }

    async findOne(id: string): Promise<Anexo> {
        const anexo = await this.anexoRepository.findOne(parseInt(id));
        if (!anexo) {
            throw new HttpException('Anexo não encontrado.', 404);
        }
        return anexo;
    }
}