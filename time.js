export class Timing {
    constructor(startMyTime) {
        this.startMyTime = startMyTime;
    }
    startJobTime() {
        window.elapsedTime = Date.now() - window.startTime;
        secs = Math.floor((window.elapsedTime / 1000) % 60);
        mins = Math.floor((window.elapsedTime / (1000 * 60)) % 60);
        hrs = Math.floor((window.elapsedTime / (1000 * 60 * 60)) % 60);
        secs = pad(secs);
        mins = pad(mins);
        hrs = pad(hrs);
        window.myTimeValue.textContent = `${hrs}:${mins}:${secs}`;
        function pad(unit) {
            return (("0") + unit).length > 2 ? unit : "0" + unit;
        }
    }
    calculatedTime() {
        let s = ''; let m = '';
        if (window.oldTime !== undefined) {
            const [hours, minutes, seconds] = window.calcTime.split(':');
            const [hours1, minutes1, seconds1] = window.oldTime.split(':');
            let newSec = Number(seconds1) + Number(seconds);
            if (newSec >= 60) {
                s = 1; newSec = Number(newSec) - 60;
            }
            let newMinet = Number(minutes1) + Number(minutes) + Number(s); s = '';
            if (newMinet >= 60) {
                m = 1; newMinet = Number(newMinet - 60);
            }
            let newHour = Number(hours1) + Number(hours) + Number(m); m = '';
            let a = pad(newHour) + ":" + pad(newMinet) + ":" + pad(newSec);
            function pad(unit) {
                return (("0") + unit).length > 2 ? unit : "0" + unit;
            }
            window.oappTime = a;
        }
    }
}
let hrs = 0;
let mins = 0;
let secs = 0;


