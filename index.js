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
// function getSubstringFromSecondIndex(str){
//     let a=str.substring(2, );
//     return a;
// }
// console.log(getSubstringFromSecondIndex("Assalomu aleykum"));


// Stringlarda `toUpperCase`, `toLowerCase`, `concat`, `trim`, `padStart`, `trimEnd`, va `padEnd` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:


// 1-masala
// function convertToUpperCase(str){
//     let a=str.toUpperCase();
//     return a;
// }
// console.log(convertToUpperCase("salom"));

// 2-masala
// function convertToLowerCase(str){
//     let a=str.toLowerCase();
//     return a;
// }
// console.log(convertToLowerCase("SalOm"));


// 3-masala
// function concatStrings(str1, str2){
//     let a=str1.concat(str2);
//     return a;
// }
// console.log(concatStrings('Hello', 'World'));

// 4-masala
// function trimString(str){
//     let a=str.trim();
//     return a;
// }
// console.log(trimString("    salom   "));

// 5-masala
// function padStringStart(str, maxLength, padChar){
//     let a=str.padStart(maxLength, padChar);
//     return a;
// }
// console.log(padStringStart('salom', 10, '*'));

// 6-masala
// function padStringEnd(str, maxLength, padChar){
//     let a=str.padEnd(maxLength, padChar);
//     return a;
// }
// console.log(padStringEnd('salom', 10, '*'));


// 7-masala
// function trimEndString(str){
//     let a=str.trimEnd();
//     return a;
// }
// console.log(trimEndString("Salom    "));


// 8-masala
// function trimStartString(str){
//     let a=str.trimStart();
//     return a;
// }
// console.log(trimStartString("      Salom    "));

// 9-masala
// function padStringWithZerosStart(str, maxLength){
//     let a=str.padStart(maxLength, '0');
//     return a;
// }
// console.log(padStringWithZerosStart("salom", 10));

// 10-masala
// function padStringWithSpacesEnd(str, maxLength){
//     let a=str.padEnd(maxLength, " ");
//     return a;
// }
// console.log(padStringWithSpacesEnd("salom", 10));



// Stringlarda `repeat`, `replace`, `replaceAll`, va `split` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:


// 1-masala
// function repeatString(str, N){
//     let a=str.repeat(N);
//     return a;
// }
// console.log(repeatString('salom', 3));


// 2-masala
// function replaceAppleWithOrange(str){
//     str=str.replace('apple', 'orange')
//     return str;
// }
// console.log(replaceAppleWithOrange("salom apple"));
// 3-masala
// function replaceFirstSmallAToBigA(str){
//     let a=str.replace('a', 'A');
//     return a;
// }
// console.log(replaceFirstSmallAToBigA('salom'));

// 4-masala
// function replaceAllCatsWithDogs(str){
//     let a=str.replaceAll(/cat/gi, 'dog');
//     return a;
// }
// console.log(replaceAllCatsWithDogs('hello cats. Cat is smile'));

// 5-masala
// function replaceAllSmallEToBigE(str){
//     let a=str.replaceAll('e', 'E');
//     return a;
// }
// console.log(replaceAllSmallEToBigE('hello'));


// 6-masala
// function splitBySpaces(str){
//     let arr=str.split(" ");
//     return arr;
// }
// console.log(splitBySpaces("hello world"));

// 7-masala
// function splitByCommas(str){
//     let arr=str.split(",");
//     return arr;
// }
// console.log(splitByCommas("hello,world"));

// 8-masala
// function splitByEachCharacter(str){
//     let arr=str.split("");
//     return arr;
// }
// console.log(splitByEachCharacter("hello"));


// 9-masala
// function splitByDelimiter(str, delimiter){
//     let arr=str.split(delimiter);
//     return arr;
// }
// console.log(splitByDelimiter('hello  world', 'o'));

// 10-masala
// function processString(str){
//     let a=str.replaceAll(/a/gi, "*");
//     let b=a.repeat(3);
//     let arr=b.split(" ");
//     return arr;
// }
// console.log(processString('Assalomu aleykum'));