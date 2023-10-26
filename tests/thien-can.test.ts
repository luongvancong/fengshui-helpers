import { ThienCan } from "../src/common"

test("Thien can", function () {
  const a = new ThienCan("GIAP")
  expect("GIAP").toEqual(a.code)
  expect(true).toEqual(a.isSinh(new ThienCan("BINH")))
  expect(true).toEqual(a.isSinh(new ThienCan("DINH")))
  expect(true).toEqual(a.isKhac(new ThienCan("MAU")))
  expect(true).toEqual(a.isKhac(new ThienCan("KY")))
  expect("DAN").toEqual(a.getThanTai().code)
  expect(["SUU", "MUI"]).toEqual(
    expect.arrayContaining(a.getQuyNhan().map((x) => x.code))
  )
  expect("MOC").toEqual(a.nguHanh.code)
})
