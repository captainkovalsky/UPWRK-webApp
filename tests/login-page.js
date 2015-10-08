//noinspection JSUnresolvedVariable,JSUnresolvedFunction
phantom.page.injectJs('tests/page-objects/login-page.js');

var loginPage = new LoginPage();

casper.test.begin('Tests Login page', function suite(test) {
    loginPage.startLogin();
    loginPage.checkPage();

    casper.run(function () {
        test.done();
    });
});
