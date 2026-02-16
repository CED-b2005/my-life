const timer = require("./timer");

function uuid() {
    const time = timer();
    const uuid = time.year.toString() + time.month.toString() + time.day.toString() + time.hour.toString() + time.minute.toString() + time.second.toString() + time.millisecond.toString();
    return uuid;
}

module.exports = uuid;