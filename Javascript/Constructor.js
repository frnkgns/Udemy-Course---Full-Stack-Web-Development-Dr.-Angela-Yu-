// instead of creating separate  code for another data you can use constructor so you can just
// filling up the data needed

var housekeeper1 = new HouseKeeper("Bella", 27, "Female", ["cooking", "laundry", "sweeping"])
var housekeeper2 = new HouseKeeper("Laund", 32, "Female", ["cooking", "laundry", "sweeping"])

// constructor needs to be on capitalze on the first letter
function HouseKeeper(name, age, gender, skills){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.skills = skills;

    // you can also include another function
    this.cleaning = function(){
        console.log("Inprogress");
    }
}

console.log(housekeeper1);
console.log(housekeeper2);