const finalDate = new Date("2023-10-31 00:00:00").getTime();

//// Updating the timer every 1 sec. 

const timer = setInterval(function() {

    const now = new Date().getTime();
    const timeRemaining = (finalDate - now);

    const days = Math.floor((timeRemaining / (1000*60*60*24)));
    const hours = Math.floor((timeRemaining % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((timeRemaining % (1000*60*60)) / (1000*60));
    const secs = Math.floor((timeRemaining % (1000*60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, "0");  /// to pad the starting of the string by '0' upto 2 letters.
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, "0");
    document.getElementById('mins').innerHTML = mins.toString().padStart(2, "0");
    document.getElementById('secs').innerHTML = secs.toString().padStart(2, "0");

    if (timeRemaining <=0){
        clearInterval(timer);
        document.getElementById('days').innerHTML = "TIME EXPIRED";
        document.getElementById('hours').innerHTML = "TIME EXPIRED";
        document.getElementById('mins').innerHTML = "TIME EXPIRED";
        document.getElementById('secs').innerHTML = "TIME EXPIRED";
    }
}, 1000); 

