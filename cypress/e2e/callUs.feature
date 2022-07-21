Feature: Call us

  Scenario: Should check if the call sales button is visible
    Given I go to the home page
    When I click on the Call Us button
    Then I see the call sales button is visible
