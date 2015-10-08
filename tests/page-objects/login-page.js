function LoginPage() {
    this.startLogin = function () {
        casper.start('http://localhost:3000/login', function () {
        });
    };

    this.checkPage = function () {
        casper.then(function () {
            casper.test.assertTitle("Login", "Title is ok");
        });
    };
}