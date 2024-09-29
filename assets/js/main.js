// Set the date and time for the offer's expiration
let offerEndDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
let countdown = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  
  // Find the time difference between now and the offer end date
  let timeRemaining = offerEndDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  // Display the result in the respective spans
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is over, display an expiration message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Offer Expired!";
  }
}, 1000);
