import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnexoModule } from './modules/anexo.module';
import { AgendaModule } from './modules/agenda.module';
import { BeneficiarioModule } from './modules/beneficiario.module';
import { ChecklistModule } from './modules/checklist.module';
import { DemandaModule } from './modules/demanda.module';
import { HelperModule } from './modules/helper.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    AnexoModule,
    AgendaModule,
    BeneficiarioModule,
    ChecklistModule,
    DemandaModule,
    HelperModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
