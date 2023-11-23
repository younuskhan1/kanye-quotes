const loadQuotes = async () => {
    const url = `https://api.kanye.rest`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const quote = data.quote;
        displayQuotes(quote);
    }
    catch (error) {
        console.log(error);
    }
}

const displayQuotes = (quote) => {
    console.log(quote);
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerText = quote;
}

loadQuotes();