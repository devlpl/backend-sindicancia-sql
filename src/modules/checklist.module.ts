import { Module } from '@nestjs/common';
import { ChecklistController } from '../controllers/checklist.controller';
import { ChecklistService } from '../services/checklist.service';
import { ChecklistRepository } from '../repositories/checklist.repository';

@Module({
    controllers: [ChecklistController],
    providers: [ChecklistService, ChecklistRepository],
})
export class ChecklistModule {}
