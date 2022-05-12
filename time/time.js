
mp.events.add('startTimer', () => {
  function startSec() {
    let sec = 0;
    let m = 0;
    let h = 0;

    setInterval(function () {
      if (sec < 59) {
        sec++;
        // setSec(sec)
      } else {
        m++;
        sec = 0;
      }

      if (m < 59) {
        // setMin(m);
      } else {
        m = 0;
        h++;
      }

      if (h < 23) {
        // setHour(h);
      } else {
        h = 0;
      }
      setTime(h,m,sec)
    }, 50);
  }

  function setTime(hour,minute,second){
    mp.world.time.set(hour, minute, second);
  }
  console.log(`IRAN HIGH TIME : [STARTED.]`);
  startSec()
});


