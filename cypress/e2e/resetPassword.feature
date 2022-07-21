Feature: Reset password

  Scenario: Should check if the reset password button is disabled when email field is empty
    Given I go to the password reset page
    Then I see that the button is disabled

  Scenario: Should check if success message is displayed
    Given I go to the password reset page
    When I enter an email in the field
    And I click on the reset password button
    Then I see that the success message is displayed