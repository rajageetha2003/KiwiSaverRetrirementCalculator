import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { RetirementCalculatorPageObject } from '../pages/retirementCalcPage';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
/*
StepDefinition files act as the glue code between config and feature files
They drive the feature files from the background
**/
defineSupportCode(({Given, When, Then}) => {
  let calc: RetirementCalculatorPageObject = new RetirementCalculatorPageObject();

  Given(/^I am on Kiwi saver retirement calculator page$/, () => {
    return expect(browser.getTitle()).to.eventually.equal('KiwiSaver Calculator');
  });

  When(/^I calculate "(.*?)" "(.*?)"$/, (num1: string, optor: string) => {
    calc.current_age.sendKeys(num1);
    calc.selectEmpStatus(optor).click();
    calc.annual_income.sendKeys("120000");
    calc.selectPIRRate('10.5%').click();
    calc.kiwisaver_balance.sendKeys(num1+"0000");
    calc.voluntary_contributions_amount.sendKeys("1000")
    calc.selectVoluntaryContributionFreq("Weekly").click();
    calc.risk_profile("Low").click();
    calc.savings_goal.sendKeys("500000");
    browser.waitForAngular();
    //calc.employment_status.sendKeys(num2);
    return calc.go_button.click();
  });

  Then(/^Estimated kiwisaver balance should be displayed as "(.*?)"$/, (result: string) => {
    //return expect(calc.result.getText()).to.eventually.equal(result);
    calc.result.getText().then(function(str){
      return expect(str.replace('\n','')).to.eventually.equal(result);
      
    })
    
  });
})

