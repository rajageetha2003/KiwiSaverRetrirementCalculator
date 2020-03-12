/*jslint node: true*/
import { browser } from 'protractor';
import { defineSupportCode } from "cucumber";
import * as fs from 'fs';
/*
Hooks help us follow DRY principle, all the utility functions go here
BeforeScenario, Features and screenshot hooks example provided here
**/
defineSupportCode(function ({registerHandler, After}) {

  registerHandler('BeforeFeature', (event) => {
    //return browser.get('https://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/');
    return browser.get('https://www.westpac.co.nz/calculator-widgets/kiwisaver-calculator/?gclid=&referrer=https:%2F%2Fwww.westpac.co.nz%2F&parent=3956&host=calculator-embed');
  });

  // After((scenario, done) => {
  //   if (scenario.isFailed()) {
  //     return browser.takeScreenshot().then(function (base64png) {
  //       let decodedImage = new Buffer(base64png, 'base64').toString('binary');
  //       scenario.attach(decodedImage, 'image/png');
  //     }, (err) => {
  //       done(err);
  //     });
  //   } else {
  //     done();
  //   }
  // });
})
