function onGeoOk(position) {
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lon = position.coords.longitude;
    // 날씨 api url을 가져온다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const city = document.querySelector("#city");
        const temp = document.querySelector("#temp");
        const weather = document.querySelector("#weather");
        city.innerHTML = data.name;
        // toFixed(자릿수)는 소수점 자릿수를 지정해서 표시할 수 있다.
        temp.innerHTML = data.main.temp.toFixed(1) + "℃";
        weather.innerHTML = data.weather[0].main;
    });
}
function onGeoError() {
    alert("위치를 찾을 수 없습니다.")
}
// getCurrentPosition는 두 개의 argument를 가진다.
// 하나는 success가 발생할 때 실행되는 함수, 나머지 하나는 error가 발생했을 떄 실행되는 함수이다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)