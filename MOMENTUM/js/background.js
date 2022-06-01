const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// appendChild()로 바디에 자식태그추가
// append는 가장 아래에, prepend는 가장 위에 오게 한다.
document.body.appendChild(bgImage);
bgImage.id = 'bgImage'