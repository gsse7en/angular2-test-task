import { AngularJCTestTaskPage } from './app.po';

describe('angular-jctest-task App', () => {
  let page: AngularJCTestTaskPage;

  beforeEach(() => {
    page = new AngularJCTestTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
