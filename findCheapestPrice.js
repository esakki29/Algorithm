/*787. Cheapest Flights Within K Stops
There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation: 
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation: 
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture. */

//Bellman Ford algorithm

var findCheapestPrice = function(n, flights, src, dst, K) {
    let arr1 = new Array(n+1).fill(Infinity);
    arr1[src]=0;
    for(let i=0;i< K+1;i++){
        const arr2 = [...arr1];
        flights.forEach(flight =>{
            const a = flight[0], b = flight[1], c= flight[2];
            arr2[b] = Math.min(arr2[b], arr1[a]+c);
        });
        arr1 = [...arr2];
    }
    return arr1[dst] != Infinity ? arr1[dst] : -1;
};

findCheapestPrice(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,0)
