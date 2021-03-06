/*
441. Arranging Coins
Easy

538

670

Add to List

Share
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
*/
/**
 * @param {number} n
 * @return {number}
 
var arrangeCoins = function(n) {
    if( n=== 0) return 0;
   let i =1;
    let count =0;
    while(i <= n){
        count+=i;
        if(count > n){
            return i-1;
        }
        if(count == n){
            return i;
        }
        i++;
    }
};*/
var arrangeCoins = function(n) {
    let x = (-1 + Math.sqrt(1+4*2*n)) / 2;
    
    return parseInt(x);
};
