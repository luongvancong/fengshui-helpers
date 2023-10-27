import { IDiaChiConfig } from "./contract"

export const diaChiConfig: { [key: string]: IDiaChiConfig } = {
  TY: { code: "TY", name: "Tý", yang: true, wuxing: "THUY", tangCan: ["QUY"] },
  SUU: { code: "SUU", name: "Sửu", yang: false, wuxing: "THO", tangCan: ["KY", "QUY", "TAN"] },
  DAN: { code: "DAN", name: "Dần", yang: true, wuxing: "MOC", tangCan: ["GIAP", "BINH", "MAU"] },
  MAO: { code: "MAO", name: "Mão", yang: false, wuxing: "MOC", tangCan: ["AT"] },
  THIN: { code: "THIN", name: "Thìn", yang: true, wuxing: "THO", tangCan: ["MAU", "AT", "QUY"] },
  TI: { code: "TI", name: "Tị", yang: false, wuxing: "HOA", tangCan: ["BINH", "CANH", "MAU"] },
  NGO: { code: "NGO", name: "Ngọ", yang: true, wuxing: "HOA", tangCan: ["DINH", "KY"] },
  MUI: { code: "MUI", name: "Mùi", yang: false, wuxing: "THO", tangCan: ["KY", "DINH", "TAN"] },
  THAN: { code: "THAN", name: "Thân", yang: true, wuxing: "KIM", tangCan: ["CANH", "NHAM", "MAU"] },
  DAU: { code: "DAU", name: "Dậu", yang: false, wuxing: "KIM", tangCan: ["TAN"] },
  TUAT: { code: "TUAT", name: "Tuất", yang: true, wuxing: "THO", tangCan: ["MAU", "DINH", "TAN"] },
  HOI: { code: "HOI", name: "Hợi", yang: false, wuxing: "THUY", tangCan: ["NHAM", "GIAP"] },
}