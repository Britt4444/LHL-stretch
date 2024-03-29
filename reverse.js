let args = process.argv.slice(2);

const reverse = function(str) {
  //convert command line args to string, separate words, split into new array
  let string = str.toString().replace(/,/g, " ").split(" ");
  let result = [];
  //loop through each word forward
  for (let i = 0; i < string.length; i++) {
    //loop through each character in the word and return it in reverse
    for (let j = string[i].length - 1; j >= 0; j--) {
      result += string[i][j];
    }
    //add newline after each word
    result += "\n";
  }
  return result;
};


console.log(reverse(args));



/*
function reverseWords(str){
   const tempArr= str.split(" ")
   let reversedTempArr=''
   for(let i=0; i<tempArr.length;i++){
     let tempStr=''
     for(let j=tempArr[i].length-1;j>=0;j--){
       tempStr += tempArr[i][j]
     }
     reversedTempArr += tempStr+ " "
   }
   return reversedTempArr
}
*/

/*
Write a program that takes
any number of command line arguments,
all strings, and reverses them before
outputting them one at a time to the console.

expected terminal output

node reverse.js hello goodbye
olleh
eybdoog

node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/