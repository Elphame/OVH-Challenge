import { expect, Page } from "@playwright/test"

export class CookiesPage {
    page: Page

    elements = {
        rejectButton: 'Reject all',
        acceptButton: 'Accept all',
        optionsLink: 'More options for'
    }

    constructor(page:Page) {
        this.page = page
    }

    async acceptCookies() {
        await this.page.getByRole('button', { name: this.elements.acceptButton })
            .click()
    }

    async rejectCookie() {
        await this.page.getByRole('button', { name: this.elements.rejectButton })
            .click()
    }

    async getOptions() {
        await this.page.getByRole('link', { name: this.elements.optionsLink })
            .click()
    }
}