describe('SVP Modernized Home Page', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9001/#/');
    
    expect(browser.getTitle()).toEqual('SVP Modernized');
  });
});