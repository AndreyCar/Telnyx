Feature: Country check in title

  Scenario: Check if the country is displayed in the title
    Given I go to the elastic-sip pricing page
    When I choose the first contry
    Then I should see that the title contains the country
