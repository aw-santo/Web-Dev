console.log("Functions in Javascript")

// function greet(name , greetText = "Good Evening!") { //This is default value of a parameter
function greet(name , greetText) {
    console.log(greetText +" "+name);
    console.log(" %d %s %s %f is a good boy/girl!",3,"san",'s', 3.56);
    // We can use access modifiers like 'c' or 'java'!
}

let name = "san";
let name1 = "shr";
let name2 = "piy";
let name3 = "cha";
let greetText = "Good Morning!";
// console.log(name + " is a good boy!");
// console.log(name1 + " is a good girl!");
// console.log(name2 + " is a good girl!");
// console.log(name3 + " is a good girl!");
greet(name, greetText);
// greet(name1);
// greet(name2);
// greet(name3);