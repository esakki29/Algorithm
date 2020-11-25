/*227. Basic Calculator II - Javascript solution

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
*/
var calculate = function(s) {
//create result variable & count length of the string
    let result =0, N= s.length;
    if(s.length >0){  // check if string is not null      
        let stack =[], num = 0, lastOp ='+'; //create stack to push number, lastOP to store previous operator, num to store number
        for(let i=0;i<N;i++){ //iterate the string
            
            if(Number(s[i]) >0 ||s[i] =='0' ) num = num * 10 +(s[i] -0); //if string is in number then assign to num variable
            if(s[i] == '+' || s[i] =='-' || s[i] == '*' || s[i] == '/' || i == N-1){ //string is opeator & last string
               if(lastOp == '+') stack.push(num); //push num if previous op is +
                if(lastOp == '-') stack.push(-num); //push -ive num if previous op is -
                if(lastOp =='*') stack.push(stack.pop() * num); //do multiple with last pushed item with current num and then push into stack
                if(lastOp == '/') stack.push(Math.trunc(stack.pop() /num)); //do div with last pushed item with current num and turnc the value to around of number and then push into stack
       num =0; // reset num
        lastOp = s[i]; //assign current op
            }
        }
        while(stack.length > 0){ //check stack is not empty 
            result +=stack.pop()// add all values in the stack
        }
    }
    return result; //return result
};
