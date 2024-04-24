function timeConsumingForLoop(){
    console.log("loop starts");
    for (let i=0; i<1000;i++){
        //some task
    }
    console.log("Loop ends");
}

function timeConsumingRunTimefeature(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("completed the timer");
        for (let i=0; i<1000;i++){
            //some task
        }
    }, 5000)
}

function timeConsumingRunTimefeature1(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("completed the timer1");
        for (let i=0; i<1000;i++){
            //some task
        }
    }, 200)
}

function timeConsumingRunTimefeature2(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("completed the timer2");
        for (let i=0; i<1000;i++){
            //some task
        }
    }, 0)
}

console.log("hi");
timeConsumingForLoop();
timeConsumingRunTimefeature();
timeConsumingRunTimefeature2();
timeConsumingRunTimefeature1();
timeConsumingForLoop();
console.log("completed");

/* OUTPUT
hi
loop starts
Loop ends
Starting timer
Starting Timer
Starting Timer
loop starts
loop ends
completed
completed the timer2
completed the timer1
completed the timer
*/

