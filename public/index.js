// initMap()
// console.log(array2)

function initMap() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Old+National+Center+in&key=AIzaSyDY6b3_getVFPndmAadMLiBQa2gHBuWMKA')
        .then(async res => await res.json())
        .then(data => {
            const lat = data.results[0].geometry.location.lat
            const lng = data.results[0].geometry.location.lng

            return [lat, lng]
        }).then(coords => {
            latitude = coords[0];
            longitude = coords[1]
        }).then(() => {
            const options = {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                zoom: 15
            }
            const map = new google.maps.Map(document.getElementById('map'), options)
            const marker = new google.maps.Marker({
                position: {
                    lat: latitude,
                    lng: longitude
                },
                map: map
            })
        })
};