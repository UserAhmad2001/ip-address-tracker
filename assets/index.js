var map = L.map('map');
var ip_field = document.querySelector('.ip-field')
var long = 0
var lat = 0

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('location is disabled!')
    }
}
function showPosition(position) {
long = position.coords.longitude
lat = position.coords.latitude
updateMap(long,lat)
}
function updateMap(lo, la) {
    map.setView([lo, la], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lo, la]).addTo(map)
        .bindPopup('Here you are.<br>Found you😊!')
        .openPopup();
}

ip_field.addEventListener('keypress',ev=>{
    if(ev.key === 'Enter' && ip_field.value !== ''){
        callAPI(ip_field.value)
    }
})
document.querySelector('.ip-search-btn').addEventListener('click',ev=>{
    if(ip_field.value !== ''){
        callAPI(ip_field.value)
    }
})
function callAPI(ip){
    const options = {
        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': '9cbb95a928msh2821046b9963db6p18054djsn98224f99e3f9',
            // 'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
        }
    };
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_NT1YtVk2pKJoi1svRG8EYLJixKUYo&ipAddress=${ip}`, options)
        .then(response => response.json())
        .then(res => parseAPICallResults(res))
        .catch(err => {
            console.log(err)
            alert('Something went wrong!')
        })
}
function parseAPICallResults(res) {
    console.log(res);
    document.querySelector('.ip').innerHTML = res.ip;
    document.querySelector('.location').innerHTML = res.location.region + ' ' + res.location.country;
    document.querySelector('.timezone').innerHTML = 'UTC' + res.location.timezone;
    document.querySelector('.isp').innerHTML = res.isp;
    updateMap(res.location.longitude, res.location.latitude);
}







getLocation()

