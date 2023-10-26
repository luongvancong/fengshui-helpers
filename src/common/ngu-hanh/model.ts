import {nguHanhConfig} from "./config";
import {INguHanhConfig} from "./contract";

export class NguHanh {
    public code: string|null;
    public name: string|null;
    public config: INguHanhConfig;

    public constructor(code: string) {
        const config = nguHanhConfig[code]
        this.config = config
        this.code = config.code
        this.name = config.name
    }

    public isSinh(a: NguHanh) {
        return this.config.taSinh === a.code
    }

    public isKhac(a: NguHanh) {
        return this.config.taKhac === a.code
    }

    public toJSON() {
        return {
            code: this.code,
            name: this.name
        }
    }
}