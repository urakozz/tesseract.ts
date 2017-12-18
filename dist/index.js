"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TesseractInstance = require("tesseract.js/dist/tesseract");
var Tesseract;
(function (Tesseract) {
    Tesseract.recognize = TesseractInstance.recognize;
    Tesseract.detect = TesseractInstance.detect;
    Tesseract.create = TesseractInstance.create;
})(Tesseract = exports.Tesseract || (exports.Tesseract = {}));
//# sourceMappingURL=index.js.map