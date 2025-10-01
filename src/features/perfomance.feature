Feature: Page Load Performance

    Background:
        Given I go to the english's Google Maps page
        And I accept the cookies

    @happy
    @performance
    Scenario: Verify Google Maps main page loads within an acceptable time
        And I enter "Paris" in the search bar
        And I click on "Search" button
        When the page loads
        Then the Time to First Byte should be less than 500 milliseconds
        And the total page load time should be less than 3000 milliseconds