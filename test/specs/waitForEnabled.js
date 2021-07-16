//import { expect as chaiExpect, assert } from 'chai';
import { expect as chaiExpect, assert } from 'chai';

describe('wait for enabled case', () => {
   it.skip('should wait for button to enabled', () => {
     browser.url('https://classic.crmpro.com/register/');
     const checkBox = $(`//input[@name='agreeTerms']`);
     const submitBtn = $('#submitButton');
     checkBox.click();
     //browser.pause(3000);
     submitBtn.waitForEnabled(4000);
     assert.equal(true, submitBtn.isEnabled());
     
   });
    it('should wait for button to be disabled', () => {
     browser.url('https://classic.crmpro.com/register/');

     const checkBox = $(`//input[@name='agreeTerms']`);
     const submitBtn = $('#submitButton');
     checkBox.click();
     //browser.pause(3000);
     submitBtn.waitForEnabled(4000);
     assert.equal(true, submitBtn.isEnabled());

     checkBox.click();
     submitBtn.waitForEnabled(4000, true);
     assert.equal(false, submitBtn.isEnabled());
     
   });
});