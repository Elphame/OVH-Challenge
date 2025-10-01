Feature: Google Maps search bar

    Background:
        Given I go to the english's Google Maps page
        And I accept the cookies

    @happy
    @search
    Scenario: As a traveler, I can find a city by using the search bar.
        When I enter "Paris" in the search bar
        And I click on "Search" button
        Then I should see "Paris" as the headline text of the left panel

    @happy
    @directions
    Scenario Outline: As a traveler, I <possibility> see the searched location in the <target> input.
        And I enter "London" in the search bar
        And I click on "Search" button
        When I click on "Directions" button
        Then I <possibility> see "London" in the <target> input

        Examples:
        | possibility | target      |
        | should      | destination |
        | shouldnot   | start point |

    @unhappy
    @unknown
    Scenario: As a traveler, I shouldnot find a non-existant place.
        When I enter "ààààààààààààà" in the search bar
        And I click on "Search" button
        Then I shouldnot see "ààààààààààààà" as the headline text of the left panel

    @edgecase
    @ambiguous
    Scenario: As a traveler, I should see many results with ambiguous search.
        When I enter "rue de Paris" in the search bar
        And I click on "Search" button
        Then I should see many results for "rue de Paris" in the left panel
