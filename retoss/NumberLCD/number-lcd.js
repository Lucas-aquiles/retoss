const lcdDigitList = require('./digits')

const SPACE = ' '
const CARRIAGE_RETURN = '\n'

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const allNumbersToDigit = function (numbers) {
    const digitLines = []
    let numberIndex = 0

    for (const number of numbers) {
        const resizedDigit = numberToDigit(Number(number))
        const digitSplit = resizedDigit.split(CARRIAGE_RETURN)


        for (let heightIndex = 1; heightIndex < digitSplit.length - 1; heightIndex++) {
            if (numberIndex === 0 && heightIndex === 1 && !digitLines[heightIndex]) {
                digitLines[heightIndex] = CARRIAGE_RETURN + digitSplit[heightIndex] + SPACE
            } else if (!digitLines[heightIndex]) {
                digitLines[heightIndex] = digitSplit[heightIndex] + SPACE

            } else if (numberIndex + 1 < numbers.length) {
                digitLines[heightIndex] += digitSplit[heightIndex] + SPACE

            } else {
                digitLines[heightIndex] += digitSplit[heightIndex]

            }
        }
        numberIndex++
    }
    return digitLinesToString(digitLines)
}

const digitLinesToString = function (digitLines) {

    return digitLines.reduce((result, line) => {
        result += `${line}\n`
        return result
    }, '')
}

module.exports = {
    allNumbersToDigit,

}