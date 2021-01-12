/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Create quotes as an array of objects
const quotes = [
  {
    quote: "Knock on wood if you're with me.",
    source: "John Gruden",
    tag: "Sports"
  },
  {
    quote: "You miss 100 percent of the shots you don't take.",
    source: "Wayne Gretsky",
    year: 1983,
    tag: "Sports"
  },
  {
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller",
    citation: "Ferris Bueller's Day Off",
    year: 1986,
    tag: "Movies"
  },
  {
    quote: "This building has to be at least... three times bigger than this!",
    source: "Derek Zoolander",
    citation: "Zoolander",
    year: 2001,
    tag: "Movies"
  },
  {
    quote: "If music be the food of love, play on.",
    source: "William Shakespeare",
    tag: "Music"
  },
  {
    quote: "Mind on a permanent vacation, ocean is the only medication. Wishing my condition ain't ever gonna go away.",
    source: "Jimmy Buffett",
    citation: "Knee Deep",
    year: 2010,
    tag: "Music"
  }
]


/***
 * `getRandomQuote` function
***/
// Use random Number function to generate random number between 1 and quotes.length
// set number to variable and use this to point to random quote
function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  return randomQuote

}

//create seperate function to get a random color
function randomColorValue () {
  let randomRGB = Math.floor(Math.random() * 256)
  return randomRGB
}

//function to generate full RGB value
function generateRGB (value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`
  return color
}

//initialize var for refresh
let refresh

/***
 * `printQuote` function
***/
function printQuote(){
  //variable to store getRandomQuote Function
  let currentQuote = getRandomQuote()

  //var to store random rgb value
  let currentRGB = generateRGB(randomColorValue)

  //store string of quote to be displayed
  let html = `<p class = 'quote'> ${currentQuote.quote}  </p>`
  html += `<p class = 'source'> ${currentQuote.source}`

  //if statements to check if 'citation' or 'year' is present in the object selected
  if ('citation' in currentQuote){
    html += `<span class = 'citation'> ${currentQuote.citation} </span>`
  }
  if('year' in currentQuote){
    html += `<span class = 'year'> ${currentQuote.year} </span>`
  }

  //add final 'tag' class to string
  html += `<span class = 'tag'> , ${currentQuote.tag.toUpperCase()} </span></p>`


  //insert string into html
  document.getElementById('quote-box').innerHTML = html

  //set background color to the random value
  document.body.style.background = currentRGB

  //clear existing timer
  clearInterval(refresh)
  
  //set refresh to 10 second timer
  refresh = setInterval(printQuote, 10000)

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
