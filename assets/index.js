var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();








    // https://geo.ipify.org/api/v2/country?apiKey=at_NT1YtVk2pKJoi1svRG8EYLJixKUYo&ipAddress=8.8.8.8


    // {
    //     "ip": "8.8.8.8",
    //     "location": {
    //         "country": "US",
    //         "region": "California",
    //         "timezone": "-07:00",
    //     },
    //     "domains": [
    //         "0d2.net",
    //         "003725.com",
    //         "0f6.b0094c.cn",
    //         "007515.com",
    //         "0guhi.jocose.cn"
    //     ],
    //     "as": {
    //         "asn": 15169,
    //         "name": "Google LLC",
    //         "route": "8.8.8.0/24",
    //         "domain": "https://about.google/intl/en/",
    //         "type": "Content"
    //     },
    //     "isp": "Google LLC"
    // }