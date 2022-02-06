function convert(num) {

    // Errors
    if (num === undefined || typeof num !== 'number' || Number.isNaN(num)) throw new Error('You must provide a number.')
    if (num < 0) throw new Error('Negative numbers are not supported.')
    if (num % 1 !== 0) throw new Error('Only integers are supported.')
    if (num > 10**15) throw new Error('Too big number.')

    // Variables
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen']
    const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
                
    const digits = num.toString()
    let word      // hunderd or thousand or million...etc dependeng on how many digits we have
    let zeros     // 2 or 3 or 6 or 9...etc dependeng on how many digits we have (e.g. if num is 1283, zeros will be 3)

    if (digits.length < 4) {
        word = 'hundred'
        zeros = 2
    } else if (digits.length < 7) {
        word = 'thousand'
        zeros = 3
    } else if (digits.length < 10) {
        word = 'million'
        zeros = 6
    } else if (digits.length < 13) {
        word = 'billion'
        zeros = 9
    } else if (digits.length < 16) {
        word = 'trillion'
        zeros = 12
    }
        
    //in case of 0 - 19
    if (num < 20) {
      return ones[num]
    }

    //in case of 20 - 99  
    if (digits.length < 3) {
      if (num % 10 === 0) return tens[digits[0]]
      return tens[digits[0]] + '-' + ones[digits[1]]
    }

    //in case of 100 and higher
    if (2 < digits.length < 19) {
        if (num % 10**zeros === 0) return convert(num / 10**zeros) + ` ${word}`
        if (num % 10**zeros < 100) return convert(Math.floor(num / 10**zeros)) + ` ${word} and ` + convert(num % 10**zeros)
        return convert(Math.floor(num / 10**zeros)) + ` ${word} ` + convert(num % 10**zeros);
    }
}

module.exports = convert   