# Language_Guesser

Combining packages to create a language detector.

## Packages
---
* Franc https://github.com/wooorm/franc
* Colors https://github.com/Marak/colors.js
* Langs https://github.com/adlawson/nodejs-langs

## Explanation
---
- The franc package detects the language and returns an three letter code for the language.
- Langs then matches the three letter code with a language name from its library.
- colors package give the output color.

## Use
---
- Clone the Repo
- Install neccecary dependencies `npm install`
- run `node index.js '(input your sample text here)'` 

## Example
---
```js
    Language_Guesser> node index.js 'das sind zo heiss'
    'Best guess this is German'
    Language_Guesser> node index.js 'Alderdom beskytter ikke mod'
    'Best guess this is Danish'
    Language_Guesser> node index.js 'Kila mtu ana haki ya kuelimishwa'
    "SORRY, COULDN'T FIND A LANGUAGE FOR CODE: swh"
```