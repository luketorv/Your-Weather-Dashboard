var searchBtn=$("#btn-search")
//console.log(searchBtn)
var citySearch=$("#city-search")

searchBtn.on("click",function() {
getGeo(citySearch.val())
})

function getGeo(name) {
    console.log(name)
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+name+"&limit=1&appid=f64fdbbca78b0be4553f7b4c70cc60ec").then(function(response){
    return response.json()
    })
    .then(function(data){
    console.log(data)
    getWeather(data[0].lat,data[0].lon,data[0].name)
    })
}

function getWeather(lat,lon,cityName){
    console.log(lat,lon)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=imperial&appid=f64fdbbca78b0be4553f7b4c70cc60ec`).then(function(response){
        return response.json()
        })
        .then(function(data){
        console.log(data,cityName)
        
        })
    
}