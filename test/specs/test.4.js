var expect = require('chai').expect;

describe('webdriver.io page', function () {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.equal('WebdriverIO - WebDriver bindings for Node.js');
    });
    it('should not have the wrong title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.not.equal('WebdriverIO - WebDriver bindings for Node.js testing');
    });
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.equal('WebdriverIO - WebDriver bindings for Node.js');
    });
    it('should not have the wrong title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.not.equal('WebdriverIO - WebDriver bindings for Node.js testing');
    });
});