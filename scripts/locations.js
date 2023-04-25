import { getLocations } from "./database.js";

const locations = getLocations();

export const locationList = () => {
    let locationHTML = "<ul>"

    for (const location of locations) {
        locationHTML += `<li>${location.place}</li>`
    }

    locationHTML += "</ul>"

    return locationHTML
}

export const locationTips = () => {
    let locationTipHTML = "<ul>"

    for (const location of locations) {
        locationTipHTML += `<li>${location.quote}</li>`
    }
    
    locationTipHTML += "<ul>"

    return locationTipHTML
}