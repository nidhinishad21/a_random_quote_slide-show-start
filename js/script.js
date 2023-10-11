/***
 * `quotes` array
***/
const quotes = [
    { 
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
        source:" Winston Churchill" 
    },
    { 
        quote: "The only true wisdom is in knowing you know nothing.", 
        source: " Socrates" 
    },
    { 
        quote: "Some infinities are bigger than other infinities.", 
        source: " John Green",
        citation:" The Fault in Our Stars" 
    },
    { 
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", 
        source: " J.K. Rowling", 
        citation: "Harry Potter and the Chamber of Secrets",
        year: " 1998"
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
        quote: " The only way to do great work is to love what you do." ,
        source: " Steve Jobs" 
    },
    { 
        quote: "Without music, life would be a mistake.", 
        source: " Friedrich Nietzsche", 
        citation:" Twilight of the Idols", 
        year: " 1889" 
    }
     
];



/***
 * `getRandomQuote` function
 *  Generates a random number within array length range and returns the quote element on that index. Then, it deletes the quote
 *  from the array so that the quote is never repeated.
***/
function getRandomQuote() {

    var index = Math.floor(Math.random()*quotes.length);
    var item = quotes[index];
    quotes.splice(index, 1);
    return item;
}



/***
 * `printQuote` function
 * This function puts the data into reppective HTML attributes.
***/
function printQuote() {
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

/**
 * We want the script to run as soon as the page is loaded so that quotes from the array are loaded.
 */
document.addEventListener("DOMContentLoaded", printQuote);


/***
 * click event listener for the print quote button.
***/
document.getElementById('load-quote').addEventListener("click", printQuote);