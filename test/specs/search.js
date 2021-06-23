import SearchPage from '../pageobjects/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter';

describe('Ebay Product Search', () => {
  it('should open the main url and verify the title', () => {
    SearchPage.open();
    //browser.url('https://www.ebay.com/');
    //expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
     expect(browser).toHaveTitle(resources.homeTitle);
  });
  
  it('should search for a product and verify the search text value', () => {
    // const searchInput = $('#gh-ac');
    // const searchBtn = $('#gh-btn');
    allureReporter.addSeverity('Critical');
    SearchPage.searchInput.addValue('Laptop');
    SearchPage.searchBtn.click();

    // searchInput.addValue('Laptop');
    // searchBtn.click();

    expect(SearchPage.searchInput).toHaveValue('Laptop')
  });
  it('should redirect to a new page and verify the title', () => {
    //expect(browser).toHaveTitle('Laptop | eBay')
    expect(browser).toHaveTitle(resources.laptopTitle);
    
  });

  it('should update the search category', () => {
    allureReporter.addFeature('search category');
    waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 3000)
    // browser.waitUntil(
    //   function() {
    //     return SearchPage.category.getText() === 'PC Laptops & Netbooks'
    //   }, { timeout: 3000 }
    //   )
    //const category = $('#gh-cat option:nth-child(1)');
    expect(SearchPage.category).toHaveText('PC Laptops & Netbooks')
  });
})
