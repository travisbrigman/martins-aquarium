const fishCollection = [
    {
        name: "Sebastian",
        food: "Plankton",
        species: "Crab",
        length: .25,
        location: "Atlantis",
        image: "./images/Sebastian.png"
    },
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: 4,
        location: "Great Barrier Reef",
        image: "./images/Dory.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: 5,
        location: "Great Barrier Reef",
        image: "./images/Nemo.jpeg"
    },
    {
        name: "Bruce",
        food: "Fish, Tires",
        species: "Great White Shark",
        length: 25,
        location: "Great Barrier Reef",
        image: "./images/Bruce.jpeg"
    },
    {
        name: "Bailey",
        food: "Small Fish, Squid",
        species: "Beluga Whale",
        length: 12,
        location: "North Atlantic Ocean",
        image: "./images/BelugaWhale.jpg"
    }
         
]

export const useFish = () => {
    return fishCollection.slice()
}

