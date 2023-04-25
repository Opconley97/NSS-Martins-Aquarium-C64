const database = {
    fishes = [
        {
            id: ,
            species: "",
            length: ,
            name: "",
            locationId: ,
            diet: ""
        },
    ],
    locations = [
        {
            id: ,
            place: "",
            quote: ""
        },
    ],
}

export const getFishes = () => {
    return database.fishes.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}