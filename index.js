// 1-masala
// function getLastChar (str){
//     return str[str.length-1];
// }
// console.log(getLastChar("Salom"));

// 2-masala
// function getMiddleChar(str) {
//   let a = 0;
//   if (str.length % 2 == 0) {
//     a = str[str.length / 2 - 1] + str[str.length / 2];
//   } else {
//     let b = Math.floor(str.length / 2);
//     a = str[b];
//   }
//   return a;
// }
// console.log(getMiddleChar("saloma"));

// 3-masala
// function getFirstCharCode(str){
//     return str.charCodeAt(0);
// }
// console.log(getFirstCharCode("Salom"));

// 4-masala
// function getStringLengthDescription(str) {
//   let text = new String();
//   if (str.length > 10) {
//     text = "Uzoq string";
//   } else {
//     text = "Qisqa string";
//   }
//   return str.length, text;
// }
// console.log(getStringLengthDescription("Salom"));

// 5-masala
// function getCharCodes(str){
//     for(let i=0; i<str.length; i++){
//         console.log(str.charCodeAt(i));
//     }
// }
// getCharCodes("salom")

// Stringlarda `slice`, `substring`, va `substr` metodlariga oid 7 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:

// 1-masala
// function getFirstThreeChars(str){
//     let str1=str.slice(0, 3);
//     return str1;
// }
// console.log(getFirstThreeChars('salom'));

// 2-masala
// function getLastFiveChars(str){
//     let str1=str.slice(str.length-5);
//     return str1;
// }
// console.log(getLastFiveChars("assalomu"));

// 3-masala
// function getMiddleChars(str) {
//   let str1=str.substring(str.length/2, str.length/2+1);
//   return str1;
// }
// console.log(getMiddleChars("salom"));


// 4-masala
// function getThreeCharsFromFifthIndex(str){
//     let a=str.substr(5, 3);
//     return a;
// }
// console.log(getThreeCharsFromFifthIndex("assalomu aleykum"));

// 5-masala
// function getFirstTenChars(str){
//     let a=str.substring(0, 11);
//     return a;
// }
// console.log(getFirstTenChars("assalomu aleykum"));


// 6-masala
// function getLastThreeChars(str){
//     let a=str.slice(str.length-3, str.length);
//     return a;
// }
// console.log(getLastThreeChars("Assalomu aleykum"));

// 7-masala
function getSubstringFromSecondIndex(str){
    let a=str.substring(2, );
    return a;
}
console.log(getSubstringFromSecondIndex("Assalomu aleykum"));