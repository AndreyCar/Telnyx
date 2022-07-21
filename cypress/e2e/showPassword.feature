Feature: Show password

  Scenario: Should sign up with invalid data
    Given I go to the sign up page
    When I click on the show password button
    Then Password input type should be text
