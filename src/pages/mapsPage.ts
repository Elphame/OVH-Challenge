import { expect, Page } from "@playwright/test"


export class MapsPage {
    page: Page

    elements = {
        inputs: {
            search: '#searchboxinput',
            startPoint: '#directions-searchbox-0',
            destination: '#directions-searchbox-1'
        },
        buttons: {
            search: '#searchbox-searchbutton',
            directions: 'Directions'
        }
    }

    constructor(page:Page) {
        this.page = page
    }

    async enterAddressInSearchInput(address: string) {
        await this.page.locator(this.elements.inputs.search)
            .fill(address)
    }

    async clickSearchButton() {
        await this.page.locator(this.elements.buttons.search)
            .click()
    }

    async clickOnDirectionsButton() {
        this.page.getByRole('button', { name: this.elements.buttons.directions })
            .click()
    }
    
    seeAddressInTitle(should: boolean, address: string) {
        if(should) {
            expect(this.page.getByRole('heading', {
                name: address,
                level: 1
            })).toBeVisible()
        }
        else {
            expect(this.page.getByRole('heading', {
                name: address,
                level: 1
            })).toBeHidden()
        }
    }

    seeAddressInStartPointInput(should: boolean, address: string) {
        const startPoint = this.page.locator(this.elements.inputs.startPoint)

        if (should) {
            const stringToRegexp = `^${address}.*$`
            const regex = new RegExp(stringToRegexp)

            expect(startPoint.getByRole('textbox')).toHaveValue(regex)
        }
        else {
            expect(startPoint.getByRole('textbox')).toBeEmpty()
        }
    }

    seeAddressInDestinationInput(should: boolean, address: string) {
        const destination = this.page.locator(this.elements.inputs.destination)
        if (should) {
            const stringToRegexp = `^${address}.*$`
            const regex = new RegExp(stringToRegexp)
            
            expect(destination.getByRole('textbox')).toHaveValue(regex)
        }
        else {
            expect(destination.getByRole('textbox')).toBeEmpty()
        }
    }

    async seeManyResults(should: boolean, address: string) {
        const count = await this.page.getByText(address).count();
        expect(should ? count > 1 : count == 1).toBeTruthy()
    }

}