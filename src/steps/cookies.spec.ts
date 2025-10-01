import { Given } from "../../support/fixtures";
import { CookiesPage } from "../pages/cookiesPage";


Given('I accept the cookies', async function () {
    await new CookiesPage(this.page).acceptCookies()
})