Feature: Join the waitlist

  Scenario: Should to join the waitlist
    Given I go to the home page
    And I click to the join the waitlist button on home page
    When I click to the join the waitlist button on storage page
    And I enter all data
    And I click to the apply now button
    Then I see a confirmation title