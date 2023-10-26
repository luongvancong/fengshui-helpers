import { thienCanConfig } from "./config"
import { NguHanh } from "../ngu-hanh"
import { IThienCanConfig } from "./contract"
import { DiaChi } from "../dia-chi"

export class ThienCan {
  public name?: string
  public code?: string
  public yang?: boolean
  public nguHanh: NguHanh
  public config: IThienCanConfig

  public constructor(code: string) {
    const config = thienCanConfig[code]
    this.config = config
    this.code = config.code
    this.name = config.name
    this.yang = config.yang
    this.nguHanh = new NguHanh(config.wuxing)
  }

  public getThanTai(): DiaChi {
    return new DiaChi(this.config.thanTai)
  }

  public getQuyNhan(): DiaChi[] {
    return this.config.quyNhan.map((x) => new DiaChi(x))
  }

  public isSinh(a: ThienCan): boolean {
    return this.nguHanh.isSinh(a.nguHanh)
  }
  public isKhac(a: ThienCan): boolean {
    return this.nguHanh.isKhac(a.nguHanh)
  }

  public toJSON() {
    return {
      code: this.code,
      name: this.name,
      yang: this.yang,
      nguHanh: this.nguHanh.toJSON(),
    }
  }
}
