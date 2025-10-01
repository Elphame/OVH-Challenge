import { Given, When, Then } from "../../support/fixtures";
import { MapsPage } from "../pages/mapsPage";


Given("I go to the english's Google Maps page", async function () {
    await this.page.goto('https://www.google.com/maps?hl=en')
})

When('I enter {string} in the search bar', async function (address: string) {
    await new MapsPage(this.page).enterAddressInSearchInput(address)
})

When('I click on {string} button', async function (buttonName: string) {
    switch(buttonName) {
        case 'Search':
            await new MapsPage(this.page).clickSearchButton()
            break
        case 'Directions':
            await new MapsPage(this.page).clickOnDirectionsButton()
            break
        default:
            throw new Error(`The button ${buttonName} doesn't exist.`)
    }
    
    await this.page.waitForTimeout(2000)
})

Then('I {possibility} see {string} as the headline text of the left panel', function (should: boolean, address: string) {
    new MapsPage(this.page).seeAddressInTitle(should, address)
})

Then('I {possibility} see {string} in the destination input', function (should: boolean, address: string) {
    new MapsPage(this.page).seeAddressInDestinationInput(should, address)
})

Then('I {possibility} see {string} in the start point input', function (should: boolean, address: string) {
    new MapsPage(this.page).seeAddressInStartPointInput(should, address)
})

Then ('I {possibility} see many results for {string} in the left panel', function(should: boolean, address: string) {
    new MapsPage(this.page).seeManyResults(should, address)
})

