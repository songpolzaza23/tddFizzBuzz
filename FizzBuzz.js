function FizzBuzz (num) {
    if (num <= 100) {
        if (num % 3 == 0 || (num >= 30 && num <= 39) || num % 10 == 3 && num != 53) {
            if (num % 5 == 0) {
                return `FizzBuzz`

            }
            else {
                return `Fizz`
                
            }
        }
        else if (num % 5 == 0 || (num >= 50 && num <= 59)) {
            if (num % 10 == 3){
                return `FizzBuzz`
                
            }
            else {
                return `Buzz`
                
            }
        }
        else {
            return `${num}` 
        }
    }
    else if (num > 100) {
        return `${num}`
    }
}

module.exports = FizzBuzz