Feature: Log in with empty fields

  Scenario: Should log in with empty fields
    Given I go to the log in page
    When I click on the Log in button
    Then I should see that email error is displayed
