// let own = confirm('Creating own Palindrome word with values')

// let input1 = prompt('Enter 1st palindrome letter')
// let input2 = prompt('Enter 2nd palindrome letter')
// let input3 = prompt('Enter 3rd palindrome letter')
// let input4 = prompt('Enter 4th palindrome letter')
// let palindrome = 'madam'
// console.log(palindrome.charAt(0))
// console.log(palindrome.at(-1))

// function isPalinedrome(para1){
//     if(palindrome.charAt(0) == palindrome.at(-1) ){
//         console.log((para1) + ' is a palindrome');
//     }else{
//         console.log((para1) + ' is not a palindrome');
//     }
// }
// isPalinedrome(palindrome)


function para (word){
    if(word == word.split("").reverse().join("")){
        return `${word} is a palindrome`
    }else{
        `${word} is not a palindrome`
    }
    
}
console.log(para('madam'));
