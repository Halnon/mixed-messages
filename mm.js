//object with properties for randommmessage generator
const msgObj = {
    jokes: [
        'What do you call a pony with a cough? A little horse.',
        'What do you call a magic dog? A labracadabrador.',
        'What did the shark say when he ate the clownfish? This tastes a little funny.',
        "What's orange and sounds like a carrot? A parrot.",
        "Why can't you hear a pterodactyl go to the bathroom? Because the “P” is silent.",
        'What do you call a woman with one leg? Eileen.',
        'What did the pirate say when he turned 80? Aye matey.',
        'Why did the frog take the bus to work today? His car got toad away.',
        'What did the buffalo say when his son left for college? Bison.',
        "What is an astronaut's favorite part on a computer? The space bar.",
        'Why did the yogurt go to the art exhibition? Because it was cultured.',
        'What do you call an apology written in dots and dashes? Re-Morse code.'
    ],

    msg: 'This joke was',

    mesgEnd: [
        'funny', 
        'hilarious', 
        'lame', 
        'horrible', 
        'totes rad', 
        'tubuler', 
        'double-yoo tee eff!', 
        'alright', 
        'meh', 
        'completely and utterly a disater and it should be ashmed of itself'
    ],

    //generates random index number of jokes array and returns random element
    randJoke() {
        const randomJk = Math.floor(Math.random() * this.jokes.length);
        return randomJk, this.jokes[randomJk];
    },

    randMsg() {
        const randomMsg = Math.floor(Math.random() * this.mesgEnd.length);
        return randomMsg, this.mesgEnd[randomMsg];
    }
}



// console.log(msgObj.jokes.length); //index length of jokes array
// console.log(msgObj.msg); //logs msg array
// console.log(msgObj.mesgEnd.length); //index length of msgEnd array

//array to push random message into
// const msgResult = [];
// console.log(msgObj.jokes[0])
console.log(msgObj.randJoke())
console.log(msgObj.randMsg())