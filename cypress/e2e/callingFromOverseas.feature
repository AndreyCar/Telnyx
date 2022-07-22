Feature: Calling from overseas

  Scenario: Should check if the title on the contact-us page is visible
    Given I go to the home page
    When I click on the Call Us button
    And I click on the Calling from overseas button
    Then I see that the title on the contact-us page is visible