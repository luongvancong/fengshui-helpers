import { INguHanhConfig } from "./contract"

export const nguHanhConfig: { [key: string]: INguHanhConfig } = {
  KIM: {
    code: "KIM",
    name: "Kim",
    taSinh: "THUY",
    taKhac: "MOC",
    sinhTa: "THO",
    khacTa: "HOA",
  },
  MOC: {
    code: "MOC",
    name: "Mộc",
    taSinh: "HOA",
    taKhac: "THO",
    sinhTa: "THUY",
    khacTa: "KIM",
  },
  THUY: {
    code: "THUY",
    name: "Thủy",
    taSinh: "MOC",
    taKhac: "HOA",
    sinhTa: "KIM",
    khacTa: "THO",
  },
  HOA: {
    code: "HOA",
    name: "Hỏa",
    taSinh: "THO",
    taKhac: "KIM",
    sinhTa: "MOC",
    khacTa: "THUY",
  },
  THO: {
    code: "THO",
    name: "Thổ",
    taSinh: "KIM",
    taKhac: "THUY",
    sinhTa: "HOA",
    khacTa: "MOC",
  },
}
