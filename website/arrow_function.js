// Without Arrow Function
function without_arrow_func(){
    console.log("I am Without Arrow Function");
}

// With Arrow function
const arrow_func = () =>{
    console.log("Hello I am arrow function");
    for(let i=0;i<4;i++)
    {
        console.log("Looping Function")
    }
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