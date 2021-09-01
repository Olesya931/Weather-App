const key = '05f0d827dc5191cc155093b4e7a2f37f';
const locationInput = document.querySelector(".location__input");

const weatherBlock = document.querySelector(".weather");
const locationBlock = document.querySelector(".location");
const backBtn = document.querySelector(".header .icon");


const temp = document.querySelector(".temp__number");
const descr = document.querySelector(".weather__descr");
const feelsLike = document.querySelector(".feels-like__temp");
const humidity = document.querySelector(".humidity__numb");
const city = document.querySelector(".location__city");
const weatherIcon = document.querySelector(".weather__icon");


locationInput.addEventListener('keyup',(e)=>{
    if(locationInput.value != "" && e.key == "Enter"){
        let api  = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&units=metric&appid=${key}`
        fetch(api)
        .then((response) => response.json())
        .then((data)=>{
            showWeather(data);
        })
    }
})

function showWeather (data){
    if (data.cod===200){
        weatherBlock.classList.remove('hide');
        locationBlock.classList.add('hide');
        backBtn.style.display = "block";

        temp.innerHTML = Math.round(data.main.temp);
        descr.innerHTML = data.weather[0].description;
        feelsLike.innerHTML = Math.round(data.main.feels_like);
        humidity.innerHTML = data.main.humidity;
        city.innerHTML = data.name;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    else{
        alert(data.message);
    }
    
}

backBtn.addEventListener("click",()=>{
    weatherBlock.classList.add('hide');
    locationBlock.classList.remove('hide');
    backBtn.style.display = "none";
})



// navigator.geolocation.getCurrentPosition((success)=>{
//     console.log(success);
// })



