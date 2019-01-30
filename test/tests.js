const test = QUnit.test

function fizzBuzz(num) {

    if(num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    else if(num % 3 === 0) {
        return 'Fizz';
    }
    else if(num % 5 === 0) {
        return 'Buzz';
    }
    else {
        return num;
    }
    
}

test('number evenly divisible by 3 will return fizz', function(assert) {
    let result = fizzBuzz(3);
    assert.equal(result, 'Fizz');
});

test('number evenly divisible by 5 will return buzz', function(assert) {
    let result = fizzBuzz(5);
    assert.equal(result, 'Buzz');
});

test('numbers evenly divisible by both 3 and 5 will return FizzBuzz', function(assert){
    let result = fizzBuzz(15);
    assert.equal(result, 'FizzBuzz');

});

test('any number not divisible by 3, 5, or both will return the number', function(assert){
    let num = 2;
    let result = fizzBuzz(num);
    assert.equal(result, num);
});


// Numbers evenly divisible by 3 should be replaced with `Fizz`
// Numbers evenly divisible by 5 should be replaced with `Buzz`
// Numbers evenly divisible by 3 **and** 5 should be replaced with `FizzBuzz`