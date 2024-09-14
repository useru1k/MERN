function callback_1(data){
    console.log(`Hello I am CallBack 1 ${data}`);
    callback_2();
}
function callback_2(){
    console.log("Hello I am CallBack 2");
}
callback_1("data");
// Synchronize call

setTimeout(() => {
    callback_2();
    
}, 3000);
// Syntax : setTimeout(funtion,time,parameter)

// Dynamic callBack
function Dynamic_callback_true(){
        console.log("Success of Dynamic CallBack");
}
function Dynamic_callback_fail(){
    console.log("Fail of Dynamic CallBack");
}
function Dynamic_callback_error(){
    console.log("Error of Dynamic CallBack");
}
function exec(data1,callback)
{
    if(data1){
        console.log(`Balance : ${data1}`);
    }
    setTimeout(callback,3000);
}
// exec("Vaanakam da mapla - System Hacked",Dynamic_callback_true)
function trigger(data1)
{
    if(data1>0)
    {
        exec(data1,Dynamic_callback_true)
    }
    else if(data1<0){
        exec(data1,Dynamic_callback_fail)
    }
    else {
        exec(data1,Dynamic_callback_error)
    }
}
// trigger(14);
trigger("Vaanakam da mapla - System Hacked");