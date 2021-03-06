// var myFavouriteFruits = ["Mango", "Orange", "Banana"];
// console.log(myFavouriteFruits.pop());
function parseTime(s) {
    var c = s.split(':');
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  }
  function convertHours(mins){
    var hour = Math.floor(mins/60);
    var mins = mins%60;
    var converted = pad(hour, 2)+':'+pad(mins, 2);
    return converted;
  }

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  function calculate_time_slot(start_time, end_time, interval = "30"){
      var i, formatted_time;
    var time_slots = new Array();
      for(var i=start_time; i<=end_time; i = i+interval){
      formatted_time = convertHours(i);
      time_slots.push(formatted_time);
    }
    return time_slots;
  }

  var startTime = "10:00";
  var endTime = "17:00";

  var start_time = parseTime(startTime),
      end_time = parseTime(endTime),
      interval = 30;

  var times_ara = calculate_time_slot( start_time, end_time, interval );

  console.log(times_ara);
