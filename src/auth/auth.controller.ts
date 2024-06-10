import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('auth')
export class AuthController {

    @Get('me')
    @UseGuards(AuthGuard)
    async me(@User() user) {
        return user
    }
}
