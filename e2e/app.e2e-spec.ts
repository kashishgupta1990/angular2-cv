import { KashishSiteUpdatePage } from './app.po';

describe('kashish-site-update App', () => {
  let page: KashishSiteUpdatePage;

  beforeEach(() => {
    page = new KashishSiteUpdatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
