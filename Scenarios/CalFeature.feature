@Regression 
#This is the tag
Feature: Calculator Operations
 
  Scenario: Perform addition in Windows Calculator
    Given I have opened the Windows Calculator
    When I enter "25"
    And I enter "25"
    Then the result should be "50" on the calculator display
    
 
    