/* 59. Spiral Matrix II -Javascript solution- time :O(n^2), space:O(n)
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:


Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]

*/

var generateMatrix = function(n) {
    var tl = 0,
        tr = n-1,
        bl = 0,
        br = n-1,
        arr = [],
        num = 1,
        i;
    
    for(i = 0; i < n; i++){
        var aux = [];
        for(var j = 0; j < n; j++){
            aux.push(0);
        }
        arr.push(aux);
    }
    
    while(num <= (n*n)){
        for(i = tl; i <= tr; i++){
            arr[tl][i] = num++;
        }
        tl++;
    
        for(i = tl; i <= br; i++){
            arr[i][br] = num++;
        }
        br--;
    
        for(i = br; i >= bl; i--){
            arr[tr][i] = num++;
        }
        tr--;
    
        for(i = tr; i >= tl; i--){
            arr[i][bl] = num++;
        }
        bl++;
    }
    
    return arr;
    
};
