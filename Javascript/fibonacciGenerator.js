var m = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var n = [0, 1];

fibonacciGenerator(n);

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        var temp = 0;
        var sum = 0;
        var total = 0;
        for(var i = 0; i < m.length; i++){
            temp = n[i];
            sum = temp + total;
            total = sum;

            n.push(total);
        }

        n.splice(0, 2);
        console.log(n);

        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    