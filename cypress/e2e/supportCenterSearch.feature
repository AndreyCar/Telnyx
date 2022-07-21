Feature: Support center search

  Scenario: Should check if the search query is in the search results
    Given I go to the support center search page
    When I enter the search query to search field
    Then I see that the search query is in the search results
    And I see that url contains the search query