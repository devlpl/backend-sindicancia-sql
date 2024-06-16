import { Module } from "@nestjs/common";
import { HelperService } from "src/services/helper.service";

@Module({
    providers: [HelperService],
    exports: [HelperService]
})
export class HelperModule {}