import { $, by, element, ElementFinder } from 'protractor';
/*
Page Objects help in better re-usablitity and maintenance of element locators
This file exports CalculatorPageObject class
**/
export class RetirementCalculatorPageObject {
  public current_age:ElementFinder;
  public help_current_age: ElementFinder;
  public current_age_msg : ElementFinder;
  public employment_status:ElementFinder;
  public annual_income: ElementFinder;
  public selectEmpStatus: any;
  public PIR_rate: ElementFinder; 
  public selectPIRRate : any;
  public kiwisaver_balance: any;
  public voluntary_contributions: ElementFinder;
  public voluntary_contributions_amount: ElementFinder;
  public selectVoluntaryContributionFreq: any;
  public risk_profile: any;
  public savings_goal: ElementFinder;
  public go_button: ElementFinder;
  public result: ElementFinder;

  constructor() {
    this.current_age = element(by.xpath("//*[@model='ctrl.data.CurrentAge']/*//input"));         
    this.help_current_age = $('.wpnib-field-current-age button.icon-btn-info');
    this.current_age_msg = $('.wpnib-field-current-age div.field-message');
    this.employment_status = element(by.model('ctrl.data.EmploymentStatus'));  
    this.selectEmpStatus = function(emp_status:string) {
        this.employment_status.$('.well-value').click();
        return this.employment_status.element(by.cssContainingText('li',emp_status));         
       }
    this.annual_income = element(by.xpath("//*[@model='ctrl.data.AnnualIncome']/*//input"));
    this.PIR_rate = element(by.model('ctrl.data.PIRRate'));
    this.selectPIRRate = function(pir_rate:string) {
        this.PIR_rate.$('.well-value').click();
        return this.PIR_rate.element(by.cssContainingText('li',pir_rate));         
       }
    this.kiwisaver_balance = element(by.xpath("//*[@model='ctrl.data.KiwiSaverBalance']/*//input")); 
    this.voluntary_contributions = element(by.xpath("//*[@model='ctrl.data.VoluntaryContributions']")); 
    this.voluntary_contributions_amount = this.voluntary_contributions.$('input');
    this.selectVoluntaryContributionFreq =  function(vc_freq:string) {
        this.voluntary_contributions.$('.well-value').click();
        return this.voluntary_contributions.element(by.cssContainingText('li',vc_freq));         
       }
    this.risk_profile = (riskProfile, string) => {
       return element(by.model('ctrl.data.RiskProfile')).element(by.cssContainingText('.well-label', riskProfile)).$('input');
    } 
    this.savings_goal = element(by.xpath("//*[@model='ctrl.data.SavingsGoal']/*//input"));
    this.go_button = $('.btn-results-reveal');
    this.result = $('.result-value.result-currency');
  }
}
