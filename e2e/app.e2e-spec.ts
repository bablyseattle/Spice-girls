import { SpiceGirlsPage } from './app.po';

describe('spice-girls App', () => {
  let page: SpiceGirlsPage;

  beforeEach(() => {
    page = new SpiceGirlsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
