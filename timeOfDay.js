
function isMorning(time) {
    return time >= 4 && time < 12;
}

function isAfternoon(time) {
    return time >= 12 && time < 17;
}

function isEvening(time) {
    return time >= 17 || time < 4;
}


function getTimeOfDay(time) {
    if (isMorning) return "Morning";
     else if (isAfternoon)  return "Afternoon";
     else if (isEvening) return "Evening";
    
}


module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };
