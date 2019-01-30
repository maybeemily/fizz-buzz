const test = QUnit.test

function fizzBuzz(num) {
    if(num % 3 === 0) {
        return 'fizz';
    }
    
}

test('number evenly divisible will return fizz', function(assert) {
    let result = fizzBuzz(3);
    assert.equal(result, 'fizz');
});

test('number eveny divisible by 5 will return buzz', funciton(assert) {
    let result = fizzBuzz(5);
    assert.equal(result, 'buzz');
})




// Numbers evenly divisable by 3 should be replace with `Fizz`
// Numbers evenly divisable by 5 should be replace with `Buzz`
// Numbers evenly divisable by 3 **and** 5 should be replace with `FizzBuzz`