import {NguHanh} from "../src/common";

const testCase: any = {
    KIM: {code: "KIM", name: "Kim", taSinh: "THUY", taKhac: "MOC", sinhTa: "THO", khacTa: "HOA"},
    MOC: {code: "MOC", name: "Mộc", taSinh: "HOA", taKhac: "THO", sinhTa: "THUY", khacTa: "KIM"},
    THUY: {code: "THUY", name: "Thủy", taSinh: "MOC", taKhac: "HOA", sinhTa: "KIM", khacTa: "THO"},
    HOA: {code: "HOA", name: "Hỏa", taSinh: "THO", taKhac: "KIM", sinhTa: "MOC", khacTa: "THUY"},
    THO: {code: "THO", name: "Thổ", taSinh: "KIM", taKhac: "THUY", sinhTa: "HOA", khacTa: "MOC"},
}

test('Ngũ hành', function() {
    const keys = Object.keys(testCase)

    for (let key of keys) {
        const a = new NguHanh(key)
        expect(testCase[key].code).toEqual(a.code)
        expect(testCase[key].name).toEqual(a.name)
        expect(true).toEqual(a.isSinh(new NguHanh(testCase[key].taSinh)))
        expect(true).toEqual(a.isKhac(new NguHanh(testCase[key].taKhac)))
        expect(true).toEqual((new NguHanh(testCase[key].sinhTa)).isSinh(a))
        expect(true).toEqual((new NguHanh(testCase[key].khacTa)).isKhac(a))
    }
})