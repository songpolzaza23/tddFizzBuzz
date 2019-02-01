const FizzBuzz = require('./FizzBuzz');

test ('A number is fizz if it is divisible by 3 or if it has a 3 in it', () => { //1
    expect(FizzBuzz(3)).toBe("Fizz")
})

test ('A number is Buzz if it is divisible by 5 or if it has a 5 in it', () => { //2
    expect(FizzBuzz(5)).toBe("Buzz")
})

test ('A number is fizz if it is divisible by 3 or if it has a 3 in it', () => { //3
    expect(FizzBuzz(6)).toBe("Fizz")
})

test ('A number is FizzBuzz if it is divisible by 3,5 or if it has a 3,5 in it', () => { //4
    expect(FizzBuzz(15)).toBe("FizzBuzz")
})

test ('A number is same if it is Division 3 and 5 is incomplete', () => { //5
    expect(FizzBuzz(2)).toBe("2")
})

test ('Your number exceeds 100', () => { //6
    expect(FizzBuzz(102)).toBe("102")
})

test ('53', () => { // 7
    expect(FizzBuzz(53)).toBe("FizzBuzz")
})

test ('35', () => { // 7
    expect(FizzBuzz(35)).toBe("FizzBuzz")
})

