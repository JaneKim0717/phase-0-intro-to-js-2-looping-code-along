// // Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"];
// const event = "surprise";


// function writeCards(name, event){
//     let newArray = [];
//     for (let i = 0; i < name.length; i++) {
//         newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//         debugger;
//     }
//     return newArray;
// }

// writeCards("names", "event")

// function countDown(init = 10) {
//     while (init>=0) {
//         console.log(init--);
//     }
// }




const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards (names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
} 

// function countDown (number) {
//     let number = 10;
//     while (number > 0) {
//         console.log (number);
//         number --; 
//     }
// }

function countDown(number = 10) {
    while (number >= 0) {
        console.log(number--);
    }
}

console.log (countDown(10));
