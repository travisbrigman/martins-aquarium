
// take in an object and turn it into HTML//

export const Quote = (quoteObject) => {
    return `
    <section class="quote__card">
                    <div class="quote__text">"${quoteObject.text}"</div>
                    <div class="quote__author">${quoteObject.author}</div>
                </section>    
    `
}