
// take in an object and turn it into HTML//

export const Location = (locationObject) => {
    return `
    <section class="location__card">
    <div>
        <img class="location__image" src="${locationObject.image}" alt="${locationObject.alt}" />
    </div>
    <div class="location__name">${locationObject.name}</div>
    <div class="location__url"><a href="${locationObject.url}">${locationObject.linkText}</a></div>
    <div class="location__description">${locationObject.description}</div>
    </section>   
    `
}