
function Palindrome(name) {
    const len = name.length;
    for (let i = 0; i < len / 2; i++) {
        if (name[i] !== name[len - 1 - i]) {
            console.log("It is not a palindrome")
            // return 'It is not a palindrome';
        }
    }
    console.log("It is a palindrome")
    return ;
}
Palindrome("radar");


function Case(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    }
    return result;
  }
  
  
  console.log(Case('somEThinG'));






