
var Names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

whospPaying(Names);
function whospPaying(names){
    while(names.length != 0){
        console.log(names[Math.round(Math.random() * names.length)])
        names.length--;
    }
}