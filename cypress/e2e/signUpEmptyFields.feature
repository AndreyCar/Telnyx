Feature: Sign up with empty fields

  Scenario: Should sign up with empty fields
    Given I go to the sign up page
    When I click on the Create Account button
    Then I should see the error is displayed
