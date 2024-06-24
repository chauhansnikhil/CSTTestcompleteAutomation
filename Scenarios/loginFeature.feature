Feature: Login feature

  Scenario: correct with corect username
    Given user should able to open login page
    When enter user name and password
    Then click on login button and user should login