// every time the function is run make sure to add items from 1

var output = [];

while(output.length != 5){
    fizzbuzz();
}

function fizzbuzz(){

    output.push(output.length + 1);

    console.log(output);
}