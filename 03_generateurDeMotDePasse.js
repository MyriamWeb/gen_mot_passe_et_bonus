/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * 
 */

 let result = ''
 const character = [
     "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
     "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0","1","2","3","4","5","6","7","8","9",
     "&", "é", "(", "-", "è", "", "ç", "à", ")", "=", "~", "#", "{", "[", "|", "`", "@", "]", "}", "^", "$", "ù", "*", ",", ";", ":", "!", "¨", "£", "%", "µ", "?", ".", "/", "§",
 ]
 // fonction génére un mot de passe de 8 caracteres , pas de requis de maj , caracteres speciaux ....
 function password(request){
     for (let i=0; i<request ; i++){
         result += character[(Math.random()*character.length)|0];
     }
     return result
 }
 console.log(password(8));