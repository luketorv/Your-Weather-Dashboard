var searchBtn=$("#btn-search")
var citySearch=$("#city-search")
var cityNameContainer=$("#cityNameContainer")
var date=moment().format("LL")

searchBtn.on("click",function() {
getGeo(citySearch.val())
})

// function get city name from API
function getGeo(name) {
    cityNameContainer.empty()
    console.log(date)
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+name+"&limit=1&appid=f64fdbbca78b0be4553f7b4c70cc60ec").then(function(response){
    return response.json()
    })
    .then(function(data){
    var cityName=$("<h2></h2>").text(data[0].name)
    var dateEl=$("<span></span>").attr("id","date").text(date)
    cityNameContainer.append(cityName)
    cityName.append(dateEl)
    getWeather(data[0].lat,data[0].lon,data[0].name)
})
}

// function to get 5 day forecast
function getWeather(lat,lon,cityName){
    console.log(lat,lon)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=imperial&appid=f64fdbbca78b0be4553f7b4c70cc60ec`).then(function(response){
        return response.json()
        })
        .then(function(data){
        console.log(data,cityName)
        $("#city").text(response.name);
        $("#date").text(moment.unix(response.dt).format("dddd, MM/DD/YYYY"));
                    
        })
    
    }


