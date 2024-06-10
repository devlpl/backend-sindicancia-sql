import { HttpException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;

@Injectable()
export class AuthService {

    constructor() { }

    async validateUser(token: string) {
        try {
            const decoded: any = jwt.verify(token, SECRET);
            if (!decoded) {
                throw new HttpException('Invalid token', 401);
            }
            return decoded;
        } catch (error) {
            throw new HttpException('Invalid token', 401);
        }
    }
}
