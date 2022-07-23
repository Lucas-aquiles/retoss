const { allNumbersToDigit } = require('./number-lcd')

const argv = process.argv.slice(2)


const numbers = argv[0]

try {
    const lcdDigits = allNumbersToDigit(numbers)
    console.log(lcdDigits)

} catch (err) {
    console.error(err)
}
