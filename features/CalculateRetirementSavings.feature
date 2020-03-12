Feature: Calculate Kiwisaver Projected Balanace
As a ProductOwner
I want that the Kiwisaver Retirement Calculator users are able to calculate what their Kiwisaver Projected Balanace would be at retirement
So That the users are able to plan their investments better

@CalculateRetirementSavings
Scenario: Calculate Kiwisaver Projected Balance at Retirement
Given I am on Kiwi saver retirement calculator page
When I calculate "34" "Employed"
Then Estimated kiwisaver balance should be displayed as "2,541,668"
