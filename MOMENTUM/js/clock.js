const today = document.querySelector("h2#today");
const clock = document.querySelector("h2#clock");

function getToday() {
    const date = new Date();
    // padStart(자릿수, 자릿수의 앞쪽에 들어갈 string)
    // padEnd(자릿수, 자릿수의 뒤쪽에 들어갈 string)
    // 예시 "hello".padStart(10, "x");
    //     >> xxxxxhello
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const week = ['일','월','화','수','목','금','토','일'];
    const dayOfweek = week[date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    today.innerHTML = `${year} - ${month} - ${day} ${dayOfweek}요일`;
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
// getClock을 호출하지 않으면 00:00:00을 한 번 보여주고 시간이 표시된다.
getToday();
setInterval(getToday, 1000);