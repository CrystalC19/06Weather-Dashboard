 const apikey =`bf906c1a8254bd26fdca08a3fd8de6ef`;
 

 //local storage

 function storeData( key,data) {
    if (localStorage.getItem(key) ===null){
        localStorage.setItem(key, json.stringify(data));
    }
 }

 // need function to retrive data from local storage



 // lat and lon data 'city' 'zipcode' getting my location
 //use await to pause execution of function
 async function getCoordinates(city, zipcode){

    const fetchData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${zipcode}&limit={limit}&appid=${apikey}`)
      //  (`https://api.openweathermap.org/geo/2.5/direct?q=${city},${zipcode}&appid=${apikey}`);

    const data = await fetchData.json();

    const latitude = data[0].lat;
    const longitude = data[0].lon;
    const Coordinates =[latitude,longitude];

    return Coordinates;
 }

 // get the corrdinates to retrive lat and lon values

 async function  getWeather(city , zipcode){
    const Coordinates = await getCoordinates (city , zipcode);


    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Coordinates[0]}}&lon=${Coordinates[1]}&appid=${apikey}`);

    const data = await fetchData.json();
    storeData(`weather`, data);
    return data;
}






async function getForecast (city, zipcode){
    const Coordinates = await getCoordinates (city , zipcode);
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${Coordinates[0]}}&lon=${Coordinates[1]}&appid=${apikey}`);
const data = await fetchData.json();

const allData =[];
// creating a for loop
for (let i=0; i< data.list.length;){
    alldata.push(data.list[i]);
    i=(i + 6)
}
storeData(`forecast`, allData);

return allData;


}



function displayweather(weather){
  
    const emoji = weather.icon;
    const name = weather.name;
    const date = dayjs();
    const temperature = weather.temp;
    const windspeed = weather.windspeed;
    const humidity= weather.humid ;

    const htmlBody = $(`#currentweather`);
// add additional styling
    htmlBody.attr(`class`,`border border-1` );

    const emojiEl = $(`#current-weather-emoji`);
    const emojiSource= ` https://openweathermap.org/img/wn/.png `;
    emojiEl.attr("src", emoji); 


    const cityEl = $(`#cityName`);
    cityEl.text(name);


    const dateEl = $(`#date`);
    dateEl.text(`(${date.format(`MM/DD/YYYY`)}) `);
// press Alt+0176 for ° 
    const tempEl = $(`#temp`);
    tempEl.text(`temp:${temperature}°F`);

    const windspeedEl = $(`#windspeed`);
    windspeedEl.text(`windspeed: ${windspeed} Mph`);

    const humidityEl = $(`#humidity`);
    humidityEl.text (`humidity: ${humidity}%`);}

// 5 day Forecast , loop through forecast

    function displayweatherForecast(weatherForecast){
        const weatherForecastList = weatherForecast;

        const forecastlist = document.querySelectorAll(`.weatherforecast-item`);

        forecastlist.forEach((item , index) =>{
            const emoji = weatherForecast[index].weather.icon;
            const dates = weatherForecast[index].dt_txt.substring(0,6)
            const temperature = weatherForecast[index].weather.temp
            const windspeed = weatherForecast[index].weather.windspeed
            const humidity = weatherForecast[index].weather.humid

            constTitle= $(`#weatherForecast-title`);
            title.text(`5-Day-Forecast`)




        }    
    
    )   
    }

// Displaying the html



// async function handle search()





//function to display previous search with if statement


// adding click attribute to the search button to handle search and display previous search 

const searchButton= $(`#search-button`);
searchButton.on(`click`, handlesearch);


