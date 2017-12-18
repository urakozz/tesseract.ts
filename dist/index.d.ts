/// <reference types="tesseract.js" />
import * as TesseractTypes from "tesseract.js";
export declare namespace Tesseract {
    const recognize: {
        (image: TesseractTypes.ImageLike): TesseractTypes.TesseractJob;
        (image: TesseractTypes.ImageLike, options: any): TesseractTypes.TesseractJob;
    };
    const detect: (image: TesseractTypes.ImageLike) => TesseractTypes.TesseractJob;
    const create: (paths: {
        workerPath: string;
        langPath: string;
        corePath: string;
    }) => TesseractTypes.TesseractStatic;
}
