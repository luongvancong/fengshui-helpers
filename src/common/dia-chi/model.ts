import { diaChiConfig } from "./config"
import { NguHanh } from "../ngu-hanh"
import {ThienCan} from "../thien-can";
import {IDiaChiConfig} from "./contract";

export class DiaChi {
  public name: string | null = null
  public code: string | null = null
  public yang: boolean | null = null
  public nguHanh: NguHanh
  public config: IDiaChiConfig

  public constructor(code: string) {
    const config = diaChiConfig[code]
    this.config = config
    this.code = config.code
    this.name = config.name
    this.yang = config.yang
    this.nguHanh = new NguHanh(config.wuxing)
  }

  public getTangCan(): ThienCan[] {
      return this.config.tangCan.map(x => new ThienCan(x))
  }

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
      nguHanh: this.nguHanh.toJSON(),
      tangCan: this.getTangCan().map(x => x.toJSON())
    }
  }
}
