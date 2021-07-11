//import Page from './page';

class blazePage  {

  get mainHeader(){
    return $('h2.home-features_title')
  }

  get productLink() {
    return $('ul.list-nav-links li:nth-child(1) a')
  }
// Wrapper
  clickOnProductLink(){
     if(this.productLink.isDisplayed() === true) {
       this.productLink.click();
     }
  }

  get jmeterLink(){
    return $("//a[text()='JMeter']");
  }

   get parent(){
     return $('ul.list-nav-links');
   }

   get childElements(){
     return this.parent.$$('li');
   }

   get getTextForLi(){
     return this.childElements.filter(element => {
       console.log(element.getText());
     })
   }

   get useCasesElements(){
     return $$('div#main_b_footer_second_block>ul>li')
   }

   get useCasesElementsText(){
     return this.useCasesElements.filter(element => {
       console.log(element.getText());
     })
   }

  }

  export default  new  blazePage();

