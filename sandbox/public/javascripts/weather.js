var url, lon, lat, temp, wind, country, city;

function showWeather(position) {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    var api = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
    $("#lat").html(lat);
    $("#lon").html(lon);

    $.getJSON(api, function(data){
        $("#icon").attr("src",data.weather[0].icon);
        $("#temp").html(data.main.temp);
        $("#temp").append("<span>&#176</span>C");
        $("#country").html(data.sys.country);
        $("#city").html(data.name);
        $("#wind").html(data.wind.speed);
    });

}


$(document).ready(function(){
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});