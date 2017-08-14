import { GoogMapsPrcPage } from './app.po';

describe('goog-maps-prc App', () => {
  let page: GoogMapsPrcPage;

  beforeEach(() => {
    page = new GoogMapsPrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
