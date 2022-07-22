Feature: Stay Connected

  Scenario: Should check if the confirmation is displayed on the blog page
    Given I go to the blog page
    When I type email in field
    And I click Subscribe button
    Then I see that the confirmation is displayed

