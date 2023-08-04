// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

// TODO: Add code to display the current date in the header of the page.
 $("#currentDay").letters(moment().format("MMMM Do YYYY, h:mm:ss a")); 

 //button setup to get values
 $(".saveBtn").on("click", function () {
  console.log(this);
  var letters = $(this).siblings(".description").val(); 
$(this).parent().attr("id"); 
setItem 
  //local storage
  localStorage.time(time, letters);
})
//runs saved data from local storage
$("#12 .description").val(localStorage.getItem("12"));
$("#11 .description").val(localStorage.getItem("11"));
$("#10 .description").val(localStorage.getItem("10"));
$("#9 .description").val(localStorage.getItem("9"));
$("#5 .description").val(localStorage.getItem("5"));
$("#4 .description").val(localStorage.getItem("4"));
$("#3 .description").val(localStorage.getItem("3"));
$("#2 .description").val(localStorage.getItem("2"));
$("#1 .description").val(localStorage.getItem("1"));

})

