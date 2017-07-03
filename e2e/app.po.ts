import { browser, by, element } from 'protractor';

export class ReadbooksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('k-root h1')).getText();
  }
}
