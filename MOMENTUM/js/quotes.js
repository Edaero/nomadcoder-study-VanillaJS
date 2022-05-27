const quotes = [
    {
        quote: "True에 느낌표 하나 찍으면 False",
        author: "???"
    },
    {
        quote: "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다.",
        author: "Paul Leary"
    },
    {
        quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
        author: "Steve Wozniak, 애플 공동창업자"
    },
    {
        quote: "하드웨어 : 사람이 발로 걷어찰 수 있는 컴퓨터의 부분",
        author: "Jeff Pesis, 프로그래머"
    },
    {
        quote: "개발자 망신은 Copy&Paste가 시킨다.",
        author: "???"
    },
    {
        quote: "모두가 원하지만 아무도 하지 않는 일에 도전하라",
        author: "Mark Zuckerberg, 페이스북 창시자"
    },
    {
        quote: "운이라는 것은 기회가 준비와 만난 순간이다.",
        author: "안철수"
    },
    {
        quote: "모든 사람들은 코딩하는 법을 배워야한다. 코딩은 생각하는 법을 가르쳐 준다.",
        author: "Steve Jobs"
    },
    {
        quote: "자동차는 기름이 아니라 소프트웨어로 달릴 것이다.",
        author: "Dieter Zetsche, 벤츠 회장"
    },
    {
        quote: "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
        author: "공자"
    }
]

const quote = document.querySelector("#todayQuote");
const author = document.querySelector("#todayAuthor");

// Math.round(1.5)는 반올림을 해준다. 2가 나온다.
// Math.ceil(1.1)은 올림을 해준다. 2가 나온다.
// Math.floor(1.9)는 내림을 해준다. 1이 나온다.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;