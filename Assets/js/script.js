 const apikey =`bf906c1a8254bd26fdca08a3fd8de6ef`;

 //local storage

 function storeData( key,data) {
    if (localStorage.getItem(key) ===null){
        localStorage.setItem(key, json.stringify(data));
    }
 }

 // need function to retrive data



 // lat and lon data 'city' 'zipcode' getting my location
 //use await to pause execution of function
 async function getCoordinates(city, zipcode){

    const fetchData = await fetch(`https://api.openweathermap.org/geo/2.5/direct?q=${city},${zipcode}&appid=${apikey}`);

    const data = await fetchData.json();

    const latitude = data[0].lat;
    const longitude = data[0].lon;
    const Coordinates =[latitude,longitude];

    return Coordinates;
 }

 // get the corrdinates to retrive lat and lon values

 async function  getWeather(city , zipcode){
    const Coordinates = await getCoordinates (city , zipcode);


    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${}}&lon=${}&appid=${apikey}`);

    storeDataInlocalStorage(`weather`, data);
    return data;
}