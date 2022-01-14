// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";


function writeCards(name, event){
    let newArray = [];
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArray;
}

writeCards("names", "event")

function countDown(init = 10) {
    while (init>=0) {
        console.log(init--);
    }
}