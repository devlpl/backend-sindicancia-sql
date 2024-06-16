import { Injectable } from "@nestjs/common";

@Injectable()
export class HelperService {
    public transformBigIntToString(obj: any): any {        
        if (typeof obj === 'bigint') {
            return obj.toString();
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.transformBigIntToString(item));
        }

        if (typeof obj === 'object' && obj !== null) {
            return Object.keys(obj).reduce((acc, key) => {
                acc[key] = this.transformBigIntToString(obj[key]);
                return acc;
            }, {});
        }

        return obj;
    }
}