
// take in an object and turn it into HTML//
export const Fish = (fishObject) => {
    return `
    <section class="fishCard">
            <div><img class="fish__image" src="${fishObject.image}" alt="a whale" /></div>
            <div class="fish__name"><span style="font-weight: 500">Name:</span> ${fishObject.name}</div>
            <div class="fish__species"><span style="font-weight: 500">Species:</span> ${fishObject.species}</div>
            <div class="fish__length"><span style="font-weight: 500">Length:</span> ${fishObject.length}'</div>
            <div class="fish__location"><span style="font-weight: 500">Location:</span> ${fishObject.location}</div>
            <div class="fish__diet"><span style="font-weight: 500">Diet:</span> ${fishObject.food}</div>
    </section>
`
}