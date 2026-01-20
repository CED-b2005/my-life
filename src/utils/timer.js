function timer() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const millisecond = now.getMilliseconds();

    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
        date: year.toString() + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0'),
        time: hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0'),
    }
}

module.exports = timer;
