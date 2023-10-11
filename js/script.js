/******************************************
*****************************************/
/***
 * `quotes` array
***/
const quotes = [
    { 
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
        source:" Winston S. Churchill" 
    },
    { 
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
        source: " Albert Einstein" 
    },
    { 
        quote: "Some infinities are bigger than other infinities.", 
        source: " John Green",
        citation:"The Fault in Our Stars" 
    },
    { 
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", 
        source: " J.K. Rowling", 
        citation: "Harry Potter and the Chamber of Secrets",
        year: "1998"
    },
    { 
        quote: "Logic will get you from A to Z; imagination will get you everywhere.",
        source:  " Albert Einstein"
    },
    {
         quote: "Be the change that you wish to see in the world." ,
          source:" Mahatma Gandhi"
    },
    { 
        quote: "If you tell the truth, you don't have to remember anything." , 
        source:" Mark Twain" 
    },
    { 
        quote: "To live is the rarest thing in the world. Most people exist, that is all.", 
        source: " Oscar Wilde" 
    },
    { 
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", 
        source: " Mahatma Gandhi" 
    },
    { 
        quote: "Without music, life would be a mistake.", 
        source: " Friedrich Nietzsche", 
        citation:"Twilight of the Idols", 
        year: "1889" 
    }
     
];


const usedQuotes = [];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

    var index = Math.floor(Math.random()*quotes.length);
    var item = quotes[index];
    quotes.splice(index, 1);
    return item;
}



/***
 * `printQuote` function
***/
function printQuote() {
   //console.log(getRandomQuote());

   let item = getRandomQuote();

   if (item)
   {

        document.getElementsByClassName("quote")[0].innerText = item.quote;

        var sourcep = document.getElementsByClassName("source")[0];

        let sourceHTML = item.source;

        if (item.citation) 
        {
            sourceHTML = sourceHTML + "<span class=\"citation\">" + item.citation + "</span>"; 

            if (item.year) 
            {
                sourceHTML = sourceHTML + "<span class=\"year\">" + item.year + "</span>"; 
            }
        } 

        sourcep.innerHTML = sourceHTML;
    }
    else 
    {
        alert('No more quotes left');
    }

}




/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.addEventListener("DOMContentLoaded", printQuote);
document.getElementById('load-quote').addEventListener("click", printQuote);