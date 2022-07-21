Feature: Currency check in url

  Scenario: Check if the currency is contained in the url
    Given I go to the elastic-sip pricing page
    When I choose the first currency
    Then I should see that the url contains the currency
