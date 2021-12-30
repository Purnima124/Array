// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
// let removedItems=myFavouriteGames.splice(3,1)
// console.log(removedItems)
function addMinutes(time, minutes) {
    var date = new Date(new Date('01/01/2015 ' + time).getTime() + minutes * 60000);
    var tempTime = ((date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours()) + ':' +
      ((date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes()) + ':' +
      ((date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds());
    return tempTime;
  }
  var starttime = "09:50:00";
  var interval = "10";
  var endtime = "10:50:00";
  var timeslots = [starttime];
  
  
  while (starttime != endtime) {
  
    starttime = addMinutes(starttime, interval);
    timeslots.push(starttime);
  
  }
console.log(timeslots);
  

