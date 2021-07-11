import { expect as chaiExpect } from 'chai';

//import { expect as chaiExpect } from 'chai';


import blazePage from '../pageobjects/blazemeter';

describe('blaze page elements handle', () => {
     it('get texts of all main links', () => {
         browser.url('https://www.blazemeter.com/')
         blazePage.getTextForLi;
         blazePage.useCasesElementsText;
             
     })
     it('main heading exist??', () => {
       console.log(blazePage.mainHeader.isDisplayed());
     });

      it('main heading enabled??', () => {
       console.log(blazePage.mainHeader.isEnabled());
     });

      it('main heading exists??', () => {
       console.log(blazePage.mainHeader.isExisting());
     });

      it('main heading displayed in view port??', () => {
       console.log(blazePage.mainHeader.isDisplayedInViewport());
     });

      it('jmeter is displayed in view port', () => {
       console.log(blazePage.jmeterLink.isDisplayedInViewport());
     });// When you open the page and you need scroll down on the page to see element 

      it('click on product link if  displayed', () => {
       blazePage.clickOnProductLink();
       browser.pause(5000);
     });


});