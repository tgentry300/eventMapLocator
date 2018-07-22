//initialize map with latitude and longitude of indianapolis, setting google maps zoom level in options object
function initMap() {
    //loop through addresses array
    function placeAllMarkersOnMap(addressArray) {
        for (address of addressArray) {
            placeMarkerWithInputtedAddress(address)
        }
    }
    let addresses = [
        '1791 s 600 w new palestine indiana',
        'old national center',
        'ruoff home mortgage center',
        'downtown indianapolis',
        'riley towers',
        'eskenazi hospital',
        'broad ripple'

    ]
    const options = {
        center: {
            lat: 39.7684,
            lng: -86.1581,
        },
        zoom: 9
    }
    const map = new google.maps.Map(document.getElementById('map'), options)


    //place a marker with an inputted address
    function placeMarkerWithInputtedAddress(inputtedAddress) {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(inputtedAddress) + '&key=AIzaSyDY6b3_getVFPndmAadMLiBQa2gHBuWMKA')
            .then(async res => await res.json())
            .then(data => {
                const latitude = data.results[0].geometry.location.lat
                const longitude = data.results[0].geometry.location.lng

                const marker = new google.maps.Marker({
                    position: {
                        lat: latitude,
                        lng: longitude
                    },
                    map: map
                })
            })
    }


    


    //fetch events with the query parameters of indianapolis tech
    fetch('https://www.eventbriteapi.com/v3/events/search/?token=YJG56ZILLZO3TPC32UND&q=indianapolis+tech')
        .then(async res => await res.json())
        .then(data => {
            venueID = data.events[6].venue_id
            fetch('https://www.eventbriteapi.com/v3/venues/' + venueID + '/?token=YJG56ZILLZO3TPC32UND')
                .then(async res => await res.json())
                .then(data => {
                    addresses.push(data.address.address_1)


                    //place markers from addresses array at top of document 
                    placeAllMarkersOnMap(addresses)
                })
        })


    
};







// fetch('https://www.eventbriteapi.com/v3/users/me/?token=YJG56ZILLZO3TPC32UND')
//     .then(async res => await res.json())
//     .then(data => {
//         console.log(data)
//     })