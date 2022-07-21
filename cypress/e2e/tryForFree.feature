Feature: Try for free

  Scenario: Should check if an email address entered in the email field
    Given I go to the home page
    When I enter an email in the field
    And I click on the Try fo free button
    Then I see an email address entered in the email field