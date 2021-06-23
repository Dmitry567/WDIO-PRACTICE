import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pageobjects/watches.page';
import { waitAndClick } from '../utilities/helper';
import resources from '../resources';

// OTHER HOOK beforeEach
// OTHER HOOK afterEach
describe('Watches Page', () => {
  before(() => {
    WatchesPage.open();
    WatchesPage.fashionLink.moveTo();
    waitAndClick(WatchesPage.watchesLink, 5000)
    //browser.pause(1000)// Implicit Wait
    // WatchesPage.watchesLink.waitForDisplayed({ timeout: 1000 });// Explicit Wait
    // WatchesPage.watchesLink.click();
   
  })

  it('should verify the watches category list', () => {
     const WatchesCategoryList = WatchesPage. getWatchesCategoryListText();
     chaiExpect(WatchesCategoryList).to.deep.equal(
       resources.watchesCategoryList
     )
  });
  //    (['Jewelry & Watches',
  // 'Watches, Parts & Accessories',
  // 'Watches',
  // 'Parts, Tools & Guides',
  // 'Watch Accessories',
  // 'Watches Mixed Lots'])
  // });

  // after(() => {
  //   browser.url('https://ebay.com')
  // })


  it('should show the banner container', () => {
     //browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
     //const promoBanner = $('section.b-promobanner');
     expect(WatchesPage.promoBanner).toBeDisplayed();
       });

     it('should show the banner title', () => {
       //const infoTitle = $('.b-promobanner__info-title')
       expect(WatchesPage.infoTitle).toHaveTextContaining('Up to 30% off Rolex')
  });
  it('should contain link on banner button and verify its clickable', () => {
    //const shopButton = $('.b-promobanner__info-btn');
    expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
    expect(WatchesPage.shopButton).toBeClickable();
  });
  it('should click on the shop button and verify the new url', () => {
    //const shopButton = $('.b-promobanner__info-btn');
    WatchesPage.shopButton.click();

    // const url = browser.getUrl();
    // chaiExpect(url).to.include('/fashion/')
    // chaiExpect(url).to.include('/fashion/')
    expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720')

  });
})
