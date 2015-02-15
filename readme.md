# local-lang-names
[![NPM](https://nodei.co/npm/local-lang-names.png)](https://nodei.co/npm/local-lang-names/)

Given an ietf-flavored language tag like `en-us`. It will return the name of the
language in the local language, e.g. `English (United States)`. A tag like `en` will return `English`.

```js
var langname = require('local-lang-names')

console.log(langname('en-us'))
console.log(langname('de-ch'))
console.log(langname('de'))
```

Prints
```
English (United States)
Deutsch (Schweiz)
Deutsch
```