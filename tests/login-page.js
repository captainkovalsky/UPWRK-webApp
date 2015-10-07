casper.test.begin('Tests homepage structure', 7, function suite(test) {
  
  casper.start('http://www.msnbc.com', function() {
    test.assertExists('a.j-signin-label', '"Sign in" link is found.');
    test.assertExists('a.j-register-label', '"Sign up" link is found.');
    test.assertExists('li.main-nav__link--explore a', '"Explore" link is found.');
    test.assertExists('li.main-nav__link--watch a', '"Watch" link is found.');
    test.assertExists('li.main-nav__link--join-in a', '"Join In" link is found.');
    test.assertExists('li.main-nav__link--speak-out a', '"Speak Out" link is found.');
    
    test.assertElementCount('article', 10, '10 articles are listed.');
  });

  casper.run(function() {
    test.done();
  });
});