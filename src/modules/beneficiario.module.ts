import { Module } from "@nestjs/common";
import { BeneficiarioController } from "../controllers/beneficiario.controller";
import { BeneficiarioService } from "../services/beneficiario.service";
import { BeneficiarioRepository } from "../repositories/beneficiario.repository";

@Module({
    controllers: [BeneficiarioController],
    providers: [BeneficiarioService, BeneficiarioRepository],
})
export class BeneficiarioModule { }