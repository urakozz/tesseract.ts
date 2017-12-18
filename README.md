# tesseract.ts
Typescript wrapper for the tesseract.js

Stupid like potato but truly working wrapper. If you a bit sick of ["Unexpected token <"](https://github.com/naptha/tesseract.js/issues/134) issue and do not want to import file in the index.html using rawgit CDN, this package is the way to go (or you can just copy its content to your project)

## Installation

```bash
npm i -S typescript.ts typescript.js
```

## Usage
```typescript
import {Tesseract} from "tesseract.ts";

// then according to the original docs/examples
Tesseract
    .recognize(myImage)
    .progress(console.log)
    .then((res: any) => {
        console.log(res);
    })
    .catch(console.error);
```
