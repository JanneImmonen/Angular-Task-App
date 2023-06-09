import { LoginPage } from './page-objects/login.po';
import { AppSharedPage } from './page-objects/app-shared.po';
import { HomePage } from './page-objects/home.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();
  const home = new HomePage();

  before(() => {
    app.navigateAndSetLanguage();
  });

  it('should display the login page and log in', () => {
    cy.url().should('include', login.url);
    login.login();
  });

  it('should display the home page and say hello', () => {
    cy.url().should('include', home.url);
    home.welcomeText.contains('Welcome to use this application!');
  });
});
