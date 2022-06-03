const clockBar = document.querySelector(`.clock-bar`);
const time = document.querySelector(`.clock-bar h1`);
const date = document.querySelector(`.content h2`);
const day = document.querySelector(`.content h3`);
async function get() {
  const response = await fetch(
    "https://worldtimeapi.org/api/timezone/Africa/Cairo"
  );
  const data = await response.json();
  time.innerHTML = data.datetime.slice(11, 16);
  date.innerHTML = data.datetime.slice(0, 10);

  if (data.day_of_week > 0 ,data.day_of_week < 2) {
    day.innerHTML = `MON`
  }else if (data.day_of_week > 1 ,data.day_of_week < 3) {
    day.innerHTML = `TUE`
  }else if (data.day_of_week > 2 ,data.day_of_week < 4) {
    day.innerHTML = `WED`
  }else if (data.day_of_week > 3 ,data.day_of_week < 5) {
    day.innerHTML = `THU`
  }else if (data.day_of_week >  4 ,data.day_of_week < 6) {
    day.innerHTML = `FRI`
  }else if (data.day_of_week > 5 ,data.day_of_week < 7) {
    day.innerHTML = `SAT`
  }else{
    day.innerHTML = `SUN`
  }
  console.log(data)
  console.log(data.day_of_week)
}
get();
