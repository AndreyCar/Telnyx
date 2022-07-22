Feature: Savings calculator

  Scenario: Should check if the saving price is visible
    Given I go to the savings calculator page
    When I choose the product
    And I click on the Continue button
    Then I see that the savings price is visible
