// GENERATEUR DE MOT DE PASSE! BONUS

const character = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "&", "é", "(", "-", "è", "_", "ç", "à", ")", "=", "~", "#", "{", "[", "|", "`", "@", "]", "}", "^", "$", "ù", "*", ",", ";", ":", "!", "¨", "£", "%", "µ", "?", ".", "/", "§"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const special = ["&", "é", "(", "-", "è", "_", "ç", "à", ")", "=", "~", "#", "{", "[", "|", "`", "@", "]", "}", "^", "$", "ù", "*", ",", ";", ":", "!", "¨", "£", "%", "µ", "?", ".", "/", "§"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let result = []

function password(request){
    for (let i=0; i<request-3 ; i++){
        result += character[(Math.random()*character.length)|0];
    }
    result += upper[(Math.random()*upper.length)|0];
    result += number[(Math.random()*number.length)|0];
    result += special[(Math.random()*special.length)|0];
    return result
}
function shuffeledWord(word) {
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

password(8)
console.log(shuffeledWord(result))