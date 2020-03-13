Feature: Calculate Kiwisaver Projected Balanace
As a ProductOwner
I want that the Kiwisaver Retirement Calculator users are able to calculate what their Kiwisaver Projected Balanace would be at retirement
So That the users are able to plan their investments better

Background: 
Given I am on Kiwi saver retirement calculator page

@CalculateRetirementSavings
Scenario Outline: Calculate Kiwisaver Projected Balance at Retirement
When Enter Current Age as "<CurrentAge>"
When Enter Employment status "<EmploymentStatus>" and annual income "<AnnualIncome>"
When Enter KiwiSaver contribution "<KiwiSaverContribution>" and PIR rate "<PIRRate>"
When Enter KiwiSaver Balance "<Balance>" and voluntary contributions "<VolunaryContribution>" "<Frequency>"
When Enter Risk Profile as "<RiskProfile>"
When Enter Savings goal as "<SavingsGoal>"
When I submit the details
Then Estimated kiwisaver balance should be displayed as "<EstimatedBalance>"

Examples:
    | CurrentAge | EmploymentStatus | AnnualIncome | KiwiSaverContribution | PIRRate | Balance | VolunaryContribution | Frequency | RiskProfile | SavingsGoal | EstimatedBalance |
	| 30         | Employed         | 82000        | 4%                    | 17.5%   |         |                      |           | High        |             | $279,558         |
	| 45         | Self-employed    |              |                       | 10.5%   | 100000  | 90                   |Fortnightly| Medium      | 290000      | $212,440         |                  
	| 55         | Not employed     |              |                       | 10.5%   | 140000  | 10                   |Annually   | Medium      | 200000      | $168,425         |