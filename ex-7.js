function isPalindrome(string) {
  // Start coding here
   
const splitWord = string.trim().split("")
const jointWord = splitWord.join("")
const reverseWord = splitWord.reverse()
const jointReverse= reverseWord.join("")
if (jointWord===jointReverse){

    return true
}else{
    return false
}
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false