let quoteBtn = document.getElementById("retrive-quote");
let jsonLink = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

quoteBtn.addEventListener("click", getQuote);

function getRandomNumber(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        console.error("Invalid input. Please provide valid numbers.");
        return null;
    }

    if (start >= end) {
        console.error("Invalid input. Starting number should be less than the ending number.");
        return null;
    }

    const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);

    return randomNumber;
}


function getQuote(){
    console.log("Button is clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", jsonLink, true);
    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let newQuote = document.getElementById("quote");
            let authorName = document.getElementById("author");
            let quotes = obj.quotes.length;
            let randomNum = getRandomNumber(0, quotes);
            newQuote.innerHTML = obj.quotes[randomNum].quote;
            authorName.innerHTML = obj.quotes[randomNum].author;

        }
        else{
            newQuote.innerHTML = "Some Error Occured!!";
        }
    }

    xhr.send();
}