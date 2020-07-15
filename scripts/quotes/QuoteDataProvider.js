const QuoteDataCollection = [
    { 
    text:"There are no walls in the ocean.",
    author:"Bailey Beluga" 
    },
    { 
    text:"Fish are friends, not food.",
    author:"Bruce the Shark" 
    },
    { 
    text:"Fish gotta swim, bird's gotta eat.",
    author:"Nigel the Pelican" 
    },
    { 
    text:"I just want to be left alone!",
    author:"Hank Septapus" 
    },

]

export const useQuote = () => {
    return QuoteDataCollection.slice()
}