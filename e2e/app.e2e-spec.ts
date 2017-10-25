import { CoinGeneratorPage } from './app.po';

describe('coin-generator App', function() {
  let page: CoinGeneratorPage;

  beforeEach(() => {
    page = new CoinGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
