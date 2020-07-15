const LocationDataCollection = [
    {
        image: "./images/NorthAtlantic.jpg",
        alt: "map showing the North Atlantic Ocean",
        name: "North Atlantic Ocean",
        url: "https://www.google.com/maps/place/Atlantic+Ocean/@-0.2494933,-117.8246144,3z/data=!3m1!4b1!4m5!3m4!1s0x65a81cae36eb8ff:0xa6342257f310534f!8m2!3d-14.5994134!4d-28.6731465",
        linkText: "Google Review of the Altantic Ocean",
        description: "second-largest of the world's oceans, with an area of about 106,460,000 square kilometers."
    },
    {
        image: "./images/GreatBarrierReef.jpeg",
        alt: "closeup image of colorful coral with lots of small orange fish against the blue background of ocean",
        name: "Great Barrier Reef",
        url: "http://www.gbrmpa.gov.au/",
        linkText: "Great Barrier Reef Marine Park Authority",
        description: "The world's largest coral reef system"
    },
    {
        image: "./images/AleutianIslands.jpeg",
        alt: "Coastal view of of rocky and mountanious terrain",
        name: "Aleutian Islands",
        url: "https://www.travelalaska.com/Destinations/Regions/Southwest/Aleutian-Islands.aspx",
        linkText: "Travel Alaska",
        description: "Chain of islands of the coast of alaska where crab fishing popular"
    },
    {
        image: "./images/Bahamas.jpeg",
        alt: "Calm ocean waters on a bright day. Two hammocks are suspend above the water",
        name: "The Bahamas",
        url: "https://www.bahamas.com/",
        linkText: "The Official Website of the islands of the Bahamas",
        description: "a country within the Lucayan Archipelago of the West Indies in the Caribbean."
    },

]

export const useLocation = () => {
    return LocationDataCollection.slice()
}