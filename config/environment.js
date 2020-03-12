"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let webServerDefaultPort = 8080;
exports.environment = {
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
    },
    // Default http port to host the web server
    webServerDefaultPort: webServerDefaultPort,
    // Protractor interactive tests
    interactiveTestPort: 6969,
    // A base URL for your application under test.
    baseUrl: 'http://' + (process.env.HTTP_HOST || 'localhost') +
        ':' + (process.env.HTTP_PORT || webServerDefaultPort)
};
