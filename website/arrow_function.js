// Without Arrow Function
function without_arrow_func(){
    console.log("heloo without arrow");
}

// With Arrow function
const arrow_func = () =>{
    console.log("hello with arroe func");
}
const arrow_func_2 = () => console.log("Single line code arrow function")

// Anonymous function
// (function() {
//     console.log("Hello Anonymous function");
// })();
let anonFunc = function() {
    console.log("I am an anonymous function!");
};

anonFunc();
without_arrow_func()
arrow_func()
arrow_func_2()