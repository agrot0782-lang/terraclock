const dias = [

"DOMINGO",
"LUNES",
"MARTES",
"MIÉRCOLES",
"JUEVES",
"VIERNES",
"SÁBADO"

];

const meses = [

"ENERO",
"FEBRERO",
"MARZO",
"ABRIL",
"MAYO",
"JUNIO",
"JULIO",
"AGOSTO",
"SEPTIEMBRE",
"OCTUBRE",
"NOVIEMBRE",
"DICIEMBRE"

];
function updateClock(){

    let now = new Date();

    let hh = String(now.getHours()).padStart(2,'0');
    let mm = String(now.getMinutes()).padStart(2,'0');
    let ss = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("hh").innerHTML = hh;
    document.getElementById("mm").innerHTML = mm;
    document.getElementById("ss").innerHTML = ss;

let fecha =

dias[now.getDay()] +

", " +

now.getDate() +

" DE " +

meses[now.getMonth()] +

" DE " +

now.getFullYear();

document.getElementById("date").innerHTML = fecha;
let saludo = "";

if(now.getHours() < 12){

    saludo = "BUENOS DÍAS";

}
else if(now.getHours() < 19){

    saludo = "BUENAS TARDES";

}
else{

    saludo = "BUENAS NOCHES";

}

document.getElementById("greeting").innerHTML =
saludo + ", TERRAFLUX";

}

updateClock();

setInterval(updateClock,1000);


async function updateWeather(){

    const apiKey = "4fe19cc6b20967371d0edd539c1b83b5";

    const ciudad = "EL CAJON";

    const url =

`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`;

    let response = await fetch(url);

    let data = await response.json();
    document.getElementById("temp").innerHTML =
Math.round(data.main.temp) + "°C";

document.getElementById("condition").innerHTML =
data.weather[0].description.toUpperCase();

document.getElementById("city").innerHTML =
data.name.toUpperCase() + ", LAGOS DE MORENO";

document.getElementById("feelsLike").innerHTML =
Math.round(data.main.feels_like) + "°C";

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";

document.getElementById("wind").innerHTML =
Math.round(data.wind.speed * 3.6) + " km/h";

document.getElementById("pressure").innerHTML =
data.main.pressure + " hPa";

let icon = data.weather[0].icon;

if(icon.includes("01")){

document.getElementById("weatherIcon").className =
"fa-solid fa-sun";

}

else if(icon.includes("02")){

document.getElementById("weatherIcon").className =
"fa-solid fa-cloud-sun";

}

else if(

icon.includes("03")
||

icon.includes("04")

){

document.getElementById("weatherIcon").className =
"fa-solid fa-cloud";

}

else if(

icon.includes("09")
||

icon.includes("10")

){

document.getElementById("weatherIcon").className =
"fa-solid fa-cloud-rain";

}

else if(icon.includes("11")){

document.getElementById("weatherIcon").className =
"fa-solid fa-bolt";

}

else{

document.getElementById("weatherIcon").className =
"fa-solid fa-smog";

}

    console.log(data);
updateWeather();

setInterval(updateWeather,600000);
}
updateWeather();
