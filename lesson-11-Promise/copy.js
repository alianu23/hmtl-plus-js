const cities = [
    {
    
        country: "Mongolia",
        city: "Ulaanbaatar",
        coordinate_lon: 106.9174, 
        coordinate_lat: 47.9207,
        url:"https://api.openweathermap.org/data/2.5/weather?lat=47.9207&lon=106.9174&appid={API key}",
        img:"https://www.toursmongolia.com/uploads/5db67cd6-0cfc-4cec-a18b-4a97a2f1e629-capital_city_ulaanbaatar.JPG",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    {
        country: "Russia",
        city: "Moskow",
        coordinate_lon: 37.60406237605911, 
        coordinate_lat: 55.76156816237269,
        img:"https://mf.b37mrtl.ru/rbthmedia/images/2021.10/original/61572d5215e9f94f1b1235c7.jpg",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    {
        country: "China",
        city: "Beijin",
        coordinate_lat: 39.91314163972986, 
        coordinate_lon: 116.41249968335907,
        img:"https://www.thoughtco.com/thmb/S21F_R52heCTjjBX-iVGc8yw_u4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-871980162-5b61d35646e0fb0050498370.jpg",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    {
        country: "Thailand",
        city: "Bankok",
        coordinate_lat: 13.780405822675093,
        coordinate_lon: 100.50393877316117,
        img:"https://static.theceomagazine.net/wp-content/uploads/2023/06/26102050/48-hours-in-Bangkok1.jpg",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    {
        country: "Korea South",
        city: "Seoul",
        coordinate_lat: 37.56492648881359,
        coordinate_lon: 126.96853922200464,
        img:"https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1366&height=768&xhint=2421&yhint=1876&crop=true",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    {
        country: "Korea North",
        city: "P'yongyang",
        coordinate_lat: 39.04804653484067,
        coordinate_lon: 125.74804558633107,
        img:"https://www.giantbomb.com/a/uploads/scale_medium/0/8169/2724900-pyongyang-06.jpg",
        temprature: "",
        temprature_min: '',
        temprature_max: '',
        humidity: '',
    },
    ];
    
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const container = document.getElementById("container");
    
    function getData(lat,lon,id) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=69a83ec0082aa36b57e9d014a3e4a9be&units=metric`;
        fetch(url) 
        .then((res) => res.json())
        .then((data) => {
            console.log("DATA" + id, data);
            cities[id].temprature = data.main.temp; 
            cities[id].temprature_max = data.main.temp_max;
            cities[id].temprature_min = data.main.temp_min;
            cities[id].humidity = data.main.humidity;
            renderUI();
            })
        .catch((error) => {
            console.log("Failed", error);
        });
    }
    cities.forEach((el, i) => {
        getData(el.coordinate_lat, el.coordinate_lon, i);
    });
    
    function renderUI() {
        container.innerHTML = "";
        cities.forEach((el) => {
          container.innerHTML += `
          <div class="box">  
            <h2 id="city">${el.city}</h2>
            <h3 id="temp">Temp: ${el.temprature}℃</h3>
            <h3 id="min">Temp min: ${el.temprature_min}℃</h3>
            <h3 id="max">Temp max: ${el.temprature_max}℃</h3> 
            <h3 id="humidity">Humidity: ${el.humidity}%</h3>
            <img class="picture" src=${el.img} alt="photo">
          </div>
      
        `;
      
        });
      
      }
    
      