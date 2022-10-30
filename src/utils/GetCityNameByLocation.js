export const getCoordinates = (setCoordinates, setCurrentCity) => {
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    function success(pos) {
        let crd = pos.coords;
        let lat = crd.latitude.toString();
        let lng = crd.longitude.toString();
        let coordinates = [lat, lng];
        getCity(coordinates, setCurrentCity);
        setCoordinates(coordinates);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}

export function getCity(coordinates, setCurrentCity) {
    let xhr = new XMLHttpRequest();
    if(coordinates && coordinates.length) {
        let lat = coordinates[0] || '';
        let lng = coordinates[1] || '';

        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.161ec4af339dc14591a2cb0268e773aa&lat=" +
            lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);

        function processRequest(e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                let city = response.address.county;
                setCurrentCity(city);
            }
        }
    }
}