// Hoisting with let
console.log("\nHoisting with let:");
try {
    console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
} catch (e) {
    console.log(e); 
}
let hoistedLet = "I am a let";
console.log(hoistedLet); // Output: I am a let

// Hoisting with const
console.log("\nHoisting with const:");
try {
    console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
} catch (e) {
    console.log(e); 
}
const hoistedConst = "I am a const";
console.log(hoistedConst); // Output: I am a const