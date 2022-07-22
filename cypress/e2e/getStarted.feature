Feature: Get started

  Scenario: Should check if Get Started Now button send to the sign up page
    Given I go to the sms api product page
    When I click on the Get Started Now button
    Then I see that the sign up page is loaded
