let form = document.querySelector("form");
let input = document.querySelector("input");
let heading = document.querySelector("#temprature_heading");
let subheading = document.querySelector("#city_heading");
let condition = document.querySelector('p');
let icon= document.querySelector("img");
let temp= document.querySelector("#temp");


const searchweather = async (e)=>{
    e.preventDefault()


    const responnse = await fetch(`http://api.weatherapi.com/v1/current.json?key=db90f70fc57a4c7087f100241252609&q=${input.value}&aqi=yes`);
    const data = await responnse.json()
    console.log(data);

    heading.className="text-6xl font-bold";
    subheading.className="my-2 text-4xl font-bold";
    icon.className="w-20 h-20";
    condition.className="text-center pt-2 text-4xl";

    heading.innerText= data.current.temp_c+"°C";
    subheading.innerText=data.location.name;
    icon.setAttribute("src",data.current.condition.icon);
    condition.innerText=data.current.condition.text;
    temp.className ="flex items-center justify-between  shadow-xl my-4 p-8 rounded-md bg-white w-full"
}

form.addEventListener("submit", searchweather);