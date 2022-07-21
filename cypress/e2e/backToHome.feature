Feature: Back to home

  Scenario: Should check if the button return from the search page to the home page
    Given I go to the search page
    When I click on the Go to Telnyx button
    Then I see I'm back on the home page