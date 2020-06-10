/*Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"*/
var dayOfTheWeek = function(day, month, year) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[(new Date(year,month-1,day)).getDay()];
    
   // return new Date(year, month - 1, day).toLocaleString('en', {weekday : 'long'});
    /*switch(new Date(`${year}-${month}-${day}`).getDay()) {
		case 0: return 'Sunday'
		case 1: return 'Monday'
		case 2: return 'Tuesday'
		case 3: return 'Wednesday'
		case 4: return 'Thursday'
		case 5: return 'Friday'
		case 6: return 'Saturday'
	}*/
};
