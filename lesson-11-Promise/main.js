const cities = [];

const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const wtrInput = document.getElementById("wtrInput");
apik = "69a83ec0082aa36b57e9d014a3e4a9be";
let lat = "";
let lon = "";

addBtn.addEventListener("click", () => {
  addWtr();
});
wtrInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addWtr();
  }
});
async function addWtr() {
  const data = await mapApi(wtrInput.value);
  const arr = data.features;
  arr.forEach((el) => {
    getData(el.center[1], el.center[0]);
  });

  wtrInput.value = "";
}
async function mapApi(value) {
  let map = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
  );
  let data = await map.json();
  return data;
}
const getData = async (lat, lon) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=1&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`
  );
  let data = await res.json();
  console.log(data);
  const temp = data.list[0].temp.day;
  const temp_min = data.list[0].temp.min;
  const temp_max = data.list[0].temp.max;
  const humidity = data.list[0].humidity;
  const speed = data.list[0].speed;
  const deg = data.list[0].deg;
  const icon = data.list[0].weather[0].icon;
  container.innerHTML = "";
  container.innerHTML += `
  <div class="box">
      <h2 >${data.city.name}</h2>
      <h3 >Temp: ${temp}℃</h3>
      <h3 >Temp min: ${temp_min}℃</h3>
      <h3 >Temp max: ${temp_max}℃</h3>
      <h3 >Humidity: ${humidity}%</h3>
      <h3 >Wind deg: ${deg}°</h3>
      <h3 >Wind speed: ${speed} m/s</h3>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon"/>
  </div>
  `;
};

// function getData(lat,lon,id) {
//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=1&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log("DATA" + id, data);
//         cities[id].city = data.name;
//         cities[id].temprature = data.main.temp;
//         cities[id].temprature_max = data.main.temp_max;
//         cities[id].temprature_min = data.main.temp_min;
//         cities[id].humidity = data.main.humidity;
//         cities[id].wind_speed = data.wind.speed;
//         cities[id].wind_deg = data.wind.deg;
//         cities[id].clouds = data.clouds.all;

//         renderUI();
//         })
//     .catch((error) => {
//         console.log("Failed", error);
//     });
// }
// cities.forEach((el, i) => {
//     getData(el.lat, el.lon, i);
// });

// function renderUI() {
//     container.innerHTML = "";
//     cities.forEach((el) => {
//       container.innerHTML += `
//       <div class="box">
//         <h2 id="city">${el.cityname}</h2>
//         <h3 id="temp">Temp: ${el.temprature}℃</h3>
//         <h3 id="min">Temp min: ${el.temprature_min}℃</h3>
//         <h3 id="max">Temp max: ${el.temprature_max}℃</h3>
//         <h3 id="humidity">Humidity: ${el.humidity}%</h3>
//         <h3 id="humidity">Wind speed: ${el.wind_speed}km/h</h3>
//         <h3 id="humidity">Wind deg: ${el.wind_deg}°</h3>
//         <h3 id="humidity">Humidity: ${el.humidity}m/s</h3>
//       </div>

//     `;

//     });

//   }
//   map API: "https://api.mapbox.com/geocoding/v5/mapbox.places/mongolia.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg"
//   weather API:   "https://api.openweathermap.org/data/2.5/forecast/daily?lat=46.8352906606684&lon=103.083217801107&cnt=1&appid=58b6f7c78582bffab3936dac99c31b25&units=metric"
