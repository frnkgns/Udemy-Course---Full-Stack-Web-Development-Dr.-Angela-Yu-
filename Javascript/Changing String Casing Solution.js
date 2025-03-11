// Syntas Slice(0,0), toUpperCase(), toLowerCase()"
// Slice from the word itself chops the string you've mention
// it takes two parameter the (Start, End)
// Start are the items you want to include from index 0, then end is the exlude, 
// what index you want to exclude
// -----------------------------------------------------------------------------------

// 1. Capitalize the first letter of the String
var Name = "frank";
var CapName = Name.slice(0,1).toUpperCase();

console.log(CapName);

//2. Fix the string with improper format
var Name2 = "fRanK";
var FixName2 = CapName + Name2.slice(1,Name2.length).toLowerCase();

console.log(FixName2);
//why did we use the length? because we don't want to exlcude any character
// we could just put 6 to it but of course if we don;t know the exact lenght we could use "length" to get 
//the size of that variable
//why 6 or the lenght? because index always starts with 0 i we put 5 on it the output would be
// Fran without k.
// ------------------------------------------------------------------------------------------------------
