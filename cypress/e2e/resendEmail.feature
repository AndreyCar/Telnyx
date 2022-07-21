Feature: Resend email

  Scenario: Should check if success message is displayed
    Given I go to the resend email page
    When I enter an email in the field
    And I click on the resend email button
    Then I see that the success message is displayed