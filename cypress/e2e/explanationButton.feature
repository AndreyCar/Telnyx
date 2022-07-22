Feature: Explanation button

  Scenario: Should check if the information is displayed after hover on the explanation button
    Given I go to the verify api pricing page
    When I hover mouse on explanation button
    Then I see that the information is displayed