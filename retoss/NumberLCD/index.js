const { manyNumberToDigit } = require('./number-lcd')

const argv = process.argv.slice(2)


const numbers = argv[0]

try {
    const lcdDigits = manyNumberToDigit(numbers)
    console.log(lcdDigits)

} catch (err) {
    console.error(err)
}
