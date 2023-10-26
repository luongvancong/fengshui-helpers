import {IThienCanConfig} from "./contract";

export const thienCanConfig: {[key: string]: IThienCanConfig} = {
    GIAP: {code: "GIAP", name: "Giáp", yang: true, wuxing: "MOC", thanTai: "DAN", quyNhan: ["SUU", "MUI"]},
    AT: {code: "AT", name: "Ất", yang: false, wuxing: "MOC", thanTai: "MAO", quyNhan: ["TY", "THAN"]},
    BINH: {code: "BINH", name: "Bính", yang: true, wuxing: "HOA", thanTai: "TI", quyNhan: ["HOI", "DAU"]},
    DINH: {code: "DINH", name: "Đinh", yang: false, wuxing: "HOA", thanTai: "NGO", quyNhan: ["HOI", "DAU"]},
    MAU: {code: "MAU", name: "Mậu", yang: true, wuxing: "THO", thanTai: "TI", quyNhan: ["SUU", "MUI"]},
    KY: {code: "KY", name: "Kỷ", yang: false, wuxing: "THO", thanTai: "NGO", quyNhan: ["TY", "THAN"]},
    CANH: {code: "CANH", name: "Canh", yang: true, wuxing: "KIM", thanTai: "THAN", quyNhan: ["SUU", "MUI"]},
    TAN: {code: "TAN", name: "Tân", yang: false, wuxing: "KIM", thanTai: "DAU", quyNhan: ["NGO", "DAN"]},
    NHAM: {code: "NHAM", name: "Nhâm", yang: true, wuxing: "THUY", thanTai: "HOI", quyNhan: ["MAO", "TI"]},
    QUY: {code: "QUY", name: "Quý", yang: false, wuxing: "THUY", thanTai: "TY", quyNhan: ["MAO", "TI"]},
}