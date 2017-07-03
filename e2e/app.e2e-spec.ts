import { ReadbooksPage } from './app.po';

describe('readbooks App', () => {
  let page: ReadbooksPage;

  beforeEach(() => {
    page = new ReadbooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to k!!');
  });
});
