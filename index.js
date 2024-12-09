// Write JavaScript to Fetch Weather Data:

// Open the script.js file in your text editor.
// Define a function or event handler to fetch weather data from a weather API.
// Choose a free weather API provider such as OpenWeatherMap, WeatherAPI, or MetaWeather.
// Use the fetch() method or an AJAX library like Axios to make a request to the API and retrieve weather information.
// Parse the JSON response and extract relevant data such as temperature, description, and location.
// Update the HTML content dynamically to display the retrieved weather information.
// Test Your App:

// Open the index.html file in your web browser to view your weather app.
// Test different cities or locations to ensure that the weather data is being fetched and displayed correctly.
// Check for any styling issues or errors in the console.

// Define a function or event handler to fetch weather data from a weather API.

//step1:lets use axios fetcher

//call

//all the linked id's
const Temp = document.getElementById("InputTemp");
const des = document.getElementById("InputDes");
const Loc = document.getElementById("InputLoc");
const PressT = document.getElementById("PressT");
const PressD = document.getElementById("PressD");
const PressL = document.getElementById("PressL");
const ShowTemp = document.getElementById("ShowTemp");
const ShowDes = document.getElementById("ShowDes");
const ShowLoc = document.getElementById("ShowLoc");

const getWeatherInfo = async () => {
  console.log("hello");
  try {
    //send network request using axios to fetch  the weather Api

    const API = await fetch(
      "http://api.weatherbit.io/v2.0/current?lat=51.5072&lon=-0.1276&key=985faa5c75a741e7a663d7ce2db45777" //the await makes it take a while to run and fetch gets the data
    );
    const weatherData = await API.json(); // any timwde we use fetch we must convert it to json  use the response.json
    const mydata = weatherData.data[0];
    console.log(mydata);

    ShowTemp.innerHTML = mydata.temp;
    ShowDes.innerText = mydata.dewpt;
    ShowLoc.innerText = mydata.city_name;
  } catch (error) {
    console.log(error);
    alert("sorry an error occured");
  }
};

PressL.addEventListener("click", getWeatherInfo);

// Test different cities or locations to ensure that the weather data is being fetched and displayed correctly.

//in order to change the city or region , we could chnge it from the latitude and longitude or just type the cities: http://api.weatherbit.io/v2.0/current?lat=51.5072&lon=-0.1276&key=985faa5c75a741e7a663d7ce2db45777