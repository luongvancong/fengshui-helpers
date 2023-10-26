import {IDiaChiConfig} from "./contract";


export const diaChiConfig: {[key: string]: IDiaChiConfig} = {
    TY: {code: "TY", name: "Tý", yang: true, wuxing: "THUY"},
    SUU: {code: "SUU", name: "Sửu", yang: false, wuxing: "THO"},
    DAN: {code: "DAN", name: "Dần", yang: true, wuxing: "MOC"},
    MAO: {code: "MAO", name: "Mão", yang: false, wuxing: "MOC"},
    THIN: {code: "THIN", name: "Thìn", yang: true, wuxing: "THO"},
    TI: {code: "TI", name: "Tị", yang: false, wuxing: "HOA"},
    NGO: {code: "NGO", name: "Ngọ", yang: true, wuxing: "HOA"},
    MUI: {code: "MUI", name: "Mùi", yang: false, wuxing: "THO"},
    THAN: {code: "THAN", name: "Thân", yang: true, wuxing: "KIM"},
    DAU: {code: "DAU", name: "Dậu", yang: false, wuxing: "KIM"},
    TUAT: {code: "TUAT", name: "Tuất", yang: true, wuxing: "THO"},
    HOI: {code: "HOI", name: "Hợi", yang: false, wuxing: "THUY"}
}