"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: yelaina buford
   Date:   2/3/20

	
*/
//adds the starting date and that next 14 days of the table 
var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

//changes the events as the date changes 
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

//displays the event info in the table row
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + "@" + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }

}

   tableHTML += "</table>";
 document.getElementById("eventList").innerHTML = tableHTML;
