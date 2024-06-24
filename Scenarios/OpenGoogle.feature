Feature: To launch chrome browser and open google.com

  Scenario: user opens google homepage
    Given I have opened the browser
    When user navigate to google.com
    Then google homepage should open
    
    
    
  Scenario:User should able to search and download a file
    Given I have open the browser
    When User navigate to google.com
    