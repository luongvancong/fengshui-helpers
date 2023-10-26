import {diaChiConfig} from "./config";
import {NguHanh} from "../ngu-hanh/model";

export class DiaChi {
    public name: string|null = null;
    public code: string|null = null;
    public yang: boolean|null = null;
    public nguHanh: NguHanh

    public constructor(code: string) {
        const config = diaChiConfig[code]
        this.code = config.code
        this.name = config.name;
        this.yang = config.yang;
        this.nguHanh = new NguHanh(config.wuxing)
    }

    public getThanTai() {}

    public getQuyNhan() {}

    public isSinh(a: DiaChi): boolean {
        return this.nguHanh.isSinh(a.nguHanh)
    }
    public isKhac(a: DiaChi): boolean {
        return this.nguHanh.isKhac(a.nguHanh)
    }

    public toJSON() {
        return {
            code: this.code,
            name: this.name,
            yang: this.yang,
            nguHanh: this.nguHanh.toJSON()
        }
    }
}