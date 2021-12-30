// var myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("Basketball")
// console.log(myFavouriteGames)

// nextSlot = starttime;
  slotArra = [nextSlot];
  for(i=0; i<timeIntervel; i++){
    var nextSlot =  getNextSlot(nextSlot, interval);
    slotArra.push(nextSlot);
  }
  alert(slotArra)
  function convertToMin(inputTime){
    inputTime = inputTime.split(':');
    var hrinseconds = parseInt(inputTime[0])*3600;
    var mininseconds = parseInt(inputTime[1])*60;
    return parseInt(hrinseconds)+parseInt(mininseconds)+parseInt(inputTime[2])
  }
  function getNextSlot(starttime, interval) {
    var piece = starttime.split(':');
    var hour = piece[0];
    var minutes = piece[1];
    var seconds = piece[2];
    var newMinute = parseInt(minutes)+parseInt(interval)
    if(newMinute>=60){
      hour = parseInt(hour)+1;
      newMinute = newMinute%60
      if(newMinute==0)
        newMinute = '00';
    }
    var newTim = hour+':'+newMinute+':'+seconds;
    return newTim;
  }	

