const quotes = [
    {
        quote: "Youth isn't always all it's touted to be.",
        auther: "Blackwell",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        auther: "Helen Keller",
    },
    {
        quote: "This too shall pass.", 
        auther: "Et hoc transibit",
    },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
auther.innerHTML = todayQuote.auther;