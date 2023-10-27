import {ThienCan} from "../thien-can";
import {DiaChi} from "../dia-chi";
import {IPillarConfig} from "./contract";
import {pillarConfig} from "./config";
import {NguHanh} from "../ngu-hanh";

export class Pillar {
    can: ThienCan
    chi: DiaChi
    config: IPillarConfig
    constructor(can: ThienCan, chi: DiaChi) {
        this.can = can
        this.chi = chi
        this.config = pillarConfig[`${can.code}_${chi.code}`]
    }

    public getNapAm(): NguHanh {
        return new NguHanh(this.config.napAm)
    }

    public getNapAmThuTuong() {
        return this.config.napAmThuTuong
    }
}