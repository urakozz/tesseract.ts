import * as TesseractTypes from "tesseract.js";
const TesseractInstance: TesseractTypes.TesseractStatic = require("tesseract.js/dist/tesseract");
export namespace Tesseract {
    export const recognize = TesseractInstance.recognize;
    export const detect = TesseractInstance.detect;
    export const create = TesseractInstance.create;
}