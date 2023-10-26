import { DiaChi, ThienCan } from "../src/common"

test("Địa chi Tý", function () {
  const a = new DiaChi("TY")
  expect("TY").toEqual(a.code)
})
