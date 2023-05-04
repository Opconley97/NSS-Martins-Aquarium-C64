const database = {
    fishes = [
        {
            id: 1,
            species: "Fish 1",
            length: 1,
            name: "Fish 1",
            locationId: 1,
            diet: "Food",
            img: ""
        },
        {
            id: 2,
            species: "Fish 2",
            length: 2,
            name: "Fish 2",
            locationId: 2,
            diet: "Food",
            img: ""
        },
        {
            id: 3,
            species: "Fish 3",
            length: 3,
            name: "Fish 3",
            locationId: 3,
            diet: "Food",
            img: ""
        },
        {
            id: 4,
            species: "Fish 4",
            length: 4,
            name: "Fish 4",
            locationId: 4,
            diet: "Food",
            img: ""
        },
        {
            id: 5,
            species: "Fish 5",
            length: 5,
            name: "Fish 5",
            locationId: 5,
            diet: "Food",
            img: ""
        },
        {
            id: 6,
            species: "Fish 6",
            length: 6,
            name: "Fish 6",
            locationId: 6,
            diet: "Food",
            img: ""
        }
    ],
    locations = [
        {
            id: 1,
            place: "Location 1",
            quote: "Quote 1"
        },
        {
            id: 2,
            place: "Location 2",
            quote: "Quote 2"
        },
        {
            id: 3,
            place: "Location 3",
            quote: "Quote 3"
        },
        {
            id: 4,
            place: "Location 4",
            quote: "Quote 4"
        },
        {
            id: 5,
            place: "Location 5",
            quote: "Quote 5"
        },
        {
            id: 6,
            place: "Location 6",
            quote: "Quote 6"
        }
    ],
}

export const getFishes = () => {
    return database.fishes.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}