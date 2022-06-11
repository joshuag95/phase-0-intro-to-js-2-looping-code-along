const names = (['Guadalupe', 'Ollie', 'Aki'], 'surprise')

function writeCards(names, event){
    const messages = [];
    for(let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

    } 
return messages
}

const count1 = []
function countDown(count1){
    let i = 10
    while (i >= 0){
        console.log(i--)
    }
    return count1;
}
console.log(countDown)()
let i = 4
console.log(countDown)