"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
const protractor_1 = require("protractor");
/*
The config folder includes all the configuration files
This example config file displays the basic protractor-cucumber framework configuration
ts-node compiler is needed for cucumberjs
tags option for specific scenarios added
**/
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl: environment_1.environment.baseUrl,
    capabilities: environment_1.environment.capabilities,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../features/*.feature'
    ],
    // This utility function helps prepare our scripts with required actions like browser maximize
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
    },
    // These are various cucumber compiler options
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: ["pretty"],
        require: ['../stepdefinitions/*.ts', '../support/*.ts'],
        //tags help us execute specific scenarios of feature files
        tags: ['@UserInfo or @CalculateRetirementSavings']
        //tags: '@CalculateRetirementSavings'
    }
};
