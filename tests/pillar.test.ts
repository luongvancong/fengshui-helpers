import { DiaChi, ThienCan } from "../src/common"
import {Pillar} from "../src/common/pillar";

test("Giáp Tý", function () {
  const a = new Pillar(
      new ThienCan("GIAP"),
      new DiaChi("TY")
  )
  expect("KIM").toEqual(a.getNapAm().code)
  expect("Hải Trung Kim").toEqual(a.getNapAmThuTuong())
})
