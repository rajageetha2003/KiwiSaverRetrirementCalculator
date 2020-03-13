Feature: User Information on Kiwisaver Retirement Calculator fields
As a ProductOwner
I want that while using the Kiwisaver Retirement Calculator all fields in the calculator have got the information icon present
So That the user is able to get a clear understanding of what needs to be entered in the fields

Background: 
Given I am on Kiwi saver retirement calculator page

@UserInfo
Scenario: Check user info for Current Age field
When I click information icon on Current Age
Then Check "This calculator has an age limit of 84 years old." is displayed below Current Age field
