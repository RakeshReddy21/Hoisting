// function Palindrome(name) {
//     const len = name.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (name[i] !== name[len - 1 - i]) {
//             console.log("It is not a palindrome")
//             // return 'It is not a palindrome';
//         }
//     }
//     console.log("It is a palindrome")
//     return '';
// }
// console.log();

// const name = "madam";
// const value = Palindrome(name);

// console.log(value);

// let a="sOmEthiNG"
// let b=a.toUpperCase();
// console.log(b);



// function name(a,b){
//     let c=a+b;
//     console.log(c);
// }
// name(3,2);

// function alt(str){
//     for(let i=0; i<=str.length;i++){
//         // console.log(i);
//         if(str[i]==str[i].toUpperCase()){
//             console.log(i);
//         }
//     }

    
// }
// alt("sOmEthiNG");

// let a="sOmEthiNG"
// // let b=a.toUpperCase()
// // let c=a.length
// console.log(a.toUpperCase());

// function toggleCase(str) {
//     return str.split('').map(char => {
//         if (char == char.toUpperCase()) {
//             return char.toLowerCase();
//         } else {
//             return char.toUpperCase();
//         }
//     }).join('');
// }

// console.log(toggleCase("sOmEthiNG"));


// function toggleCase(str) {
//     return str.split('').map(toggleChar).join('');
// }

// function toggleChar(char) {
//     if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//     } else {
//         return char.toUpperCase();
//     }
// }

// const originalString = 'sOmEthiNG';
// const convertedString = toggleCase(originalString);

// console.log(convertedString);

// function alt(str){
//     for(let i=0; i<=str.length;i++){
//         // console.log(i);
//         if(str[i]===str[i].toUpperCase){
//             console.log(i);
//         }
//     }
// }
// alt("sOmEthiNG");

// let x="sOmEthiNG";
// for(i=0;i<=x.length;i++){
//     console.log(x);
    
// }
// let x="sOmEthiNG";
// for(i=0;i<=x.length;i++){
//     console.log(x[i]);   
//     if(x[i]%2==0){
//         // console.log(x[i]);
//     }
// }



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






