console.log(4353535);

const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const player = {
    name: "SH",
    points: 10,
    fat: true,
    sayHola: function(name){
        console.log('Hola'+" I'm "+name);
    },
};

console.log(player);
console.log(player.name);

player.lastName = 'Lee';

console.log(player);

player.sayHola('SL');

function sayHello(name){
    console.log("Hello, my name is "+name)
}
sayHello(player.name+player.lastName);

const age = prompt("How old are you?");
console.log(parseInt(age));

if(age == 100){
    console.log('wow');
}