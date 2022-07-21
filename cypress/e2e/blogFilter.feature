Feature: Blog filter

  Scenario: Should check if the filter by product shows the correct results
    Given I go to the blog page
    When I click on the first filter by product
    Then I see that the filter by product shows the correct results
    

  Scenario: Should check if the filter by content shows the correct results
    Given I go again to the blog page
    When I click on the first filter by content
    Then I see that the filter by content shows the correct results