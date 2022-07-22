Feature: Talk to an expert

  Scenario: Should check if Talk to an expert button send to the contact us page
    Given I go to the home page
    When I click on the Talk to an expert button
    Then I see that the contact us page is loaded

