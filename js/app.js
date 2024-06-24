  //Connecting Html/Css
  const currentHour = document.querySelector('.js-hr');
  const currentMinute = document.querySelector('.js-min');
  const currentSecond = document.querySelector('.js-s');
  const currentCycle = document.querySelector('.js-cycle');
  const currentPeriod = document.querySelector('.js-period');


  currentTime();
  dayCycle();
  setInterval(currentTime, 1000);


  function currentTime(){
    //collecting current date
    const date = new Date();//current date
    let hour = date.getHours();//holding hours
    let minute = date.getMinutes();//holding minutes
    let second = date.getSeconds();//holding seconds
  
    //Converting Time 
    if(hour > 12){
      hour = hour - 12;
    }
  
    //Assigning JS to html
    currentHour.innerHTML = hour;
    currentMinute.innerHTML = minute
    currentSecond.innerHTML = second;
    
    }

    function dayCycle(){
      const date = new Date();
      let hour = date.getHours();//holding hours
      
      if(hour >= 12 ){//12PM
        currentCycle.innerHTML = 'pm';
        currentPeriod.style.backgroundColor = '#202020';
        currentPeriod.innerHTML = 'night';
      }else if(hour < 12){//12AM
        currentCycle.innerHTML = 'am';
        currentPeriod.style.backgroundColor = 'rgb(28, 168, 161)';
        currentPeriod.innerHTML = 'day';
      }
    }











//console.log(date);
