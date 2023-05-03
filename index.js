// Importing needed modules
import { franc } from 'franc'
import colors from 'colors'
import langs from 'langs'

// Taking input text from the command
const inputText = process.argv[2]

const langCode = franc(inputText)
console.log(langCode)

if (langCode === 'und') {
    console.log(colors.red("COULD NOT FIGURE OUT THE LANGUAGE. TRY WITH MORE INPUT TEXT"))
} else {
    const language = langs.where("3", langCode)
    if (language) {
        console.log(colors.green(`Best Guess this is ${language.name}`))
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`))
    }
}

