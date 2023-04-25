import { getFishes } from "./database.js";

const fishes = getFishes();

export const fishList  = () => {
    let fishHTML = "<ul>"

    for (const fish of fishes) {
        fishHTML += `<li>${fish.species}</li>`
    }
    fishHTML += "</ul>"

    return fishHTML
}