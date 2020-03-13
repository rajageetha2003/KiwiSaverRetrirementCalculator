import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { RetirementCalculatorPageObject } from '../pages/retirementCalcPage';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
var EC = browser.ExpectedConditions;
/*
StepDefinition files act as the glue code between config and feature files
They drive the feature files from the background
**/
defineSupportCode(({Given, When, Then}) => {
  let calc: RetirementCalculatorPageObject = new RetirementCalculatorPageObject();

  Given(/^I am on Kiwi saver retirement calculator page$/, () => {
    return expect(browser.getTitle()).to.eventually.equal('KiwiSaver Calculator');
  });

  When(/^Enter Current Age as "(.*?)"$/, function(num1: string) {    
    browser.wait(EC.visibilityOf(calc.current_age));
    calc.current_age.clear();
    return calc.current_age.sendKeys(num1);
  });
  When(/^Enter Employment status "(.*?)" and annual income "(.*?)"$/, function(num1: string, num2:string) {
    if(num1 != "Employed") return calc.selectEmpStatus(num1).click();
    else {
      calc.selectEmpStatus(num1).click();
      calc.annual_income.clear();
      return calc.annual_income.sendKeys(num2);
    }   
  });

  When(/^Enter KiwiSaver contribution "(.*?)" and PIR rate "(.*?)"$/, function(num1: string, num2:string) {
    if(num1 != null && num1 != "") calc.kiwisaver_contribution(num1).click();
    return calc.selectPIRRate(num2).click();
  });

  When(/^Enter KiwiSaver Balance "(.*?)" and voluntary contributions "(.*?)" "(.*?)"$/, function(num1: string, num2:string, num3: string) {
    calc.kiwisaver_balance.sendKeys(num1);    
    if(num3!= null && num3 != "") calc.selectVoluntaryContributionFreq(num3).click();
    calc.voluntary_contributions_amount.clear();
    return calc.voluntary_contributions_amount.sendKeys(num2)
  });
  
  When(/^Enter Risk Profile as "(.*?)"$/, function(num1: string) {
    if(num1!= null && num1 != "")  return calc.risk_profile(num1).click();
  });

  When(/^Enter Savings goal as "(.*?)"$/, function(num1: string) {
    calc.savings_goal.clear()
     return calc.savings_goal.sendKeys(num1);
  });

  When(/^I submit the details$/, function() {   
    browser.wait(EC.elementToBeClickable(calc.go_button));
     return calc.go_button.click();
 });

  When(/^I calculate "(.*?)" "(.*?)"$/, (num1: string, optor: string) => {
    calc.current_age.sendKeys(num1);
    calc.selectEmpStatus(optor).click();
    calc.annual_income.sendKeys("120000");
    calc.kiwisaver_contribution("4").click();
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

  When(/^I click information icon on Current Age$/, () => {     
    browser.wait(EC.visibilityOf(calc.help_current_age));
    return calc.help_current_age.click();
  });

  Then(/^Estimated kiwisaver balance should be displayed as "(.*?)"$/, (result: string) => {
    browser.wait(EC.visibilityOf(calc.result));
    calc.result.getText().then(function(str){
      return expect(str.replace('\n','')).to.equal(result);

    })
    
  });

  Then(/^Check "(.*?)" is displayed below Current Age field$/, (result: string) => {
    browser.waitForAngular();  
     return expect(calc.current_age_msg.getText()).to.eventually.equal(result);      
  });
})

