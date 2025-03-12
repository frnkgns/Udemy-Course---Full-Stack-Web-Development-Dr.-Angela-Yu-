//Every time function runs append a number continously
//if it is divisible by 3  then append fizz if divisible by 5 append buzz
var output = [];

while(output.length != 27){
    fizzbuzz();
}

function fizzbuzz(){

    output.push((output.length == 0) ? output.length + 1 : ((output.length + 1)% 3 == 0) ? "Fizz" : ((output.length + 1) % 5 == 0) ? "Buzz" : output.length + 1);
    console.log(output);
}