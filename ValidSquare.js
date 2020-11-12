/* 593. Valid Square
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
 

Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.

*/
//Js solution - Time & space complexity O(1)

var validSquare = function(p1, p2, p3, p4) {
  //find the distance between 2 points (x1 -x2)^2 +(y1-y2)^2
    let ds = (a,b)=> Math.pow((a[0]-b[0]),2) + Math.pow((a[1]-b[1]),2);
    //set for store unique distance
    let dsSet = new Set();
    dsSet.add(ds(p1,p2));
    dsSet.add(ds(p2,p3));
    dsSet.add(ds(p3,p4));
    dsSet.add(ds(p1,p4));
    dsSet.add(ds(p1,p3));
    dsSet.add(ds(p2,p4));
   //Return true if set dosn't contain 0 & size is 2
   return !dsSet.has(0) &&  dsSet.size === 2;
};

