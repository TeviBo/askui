import { driver } from '../../helpers/hooks';
import LoginPage from '../../pageObjects/LoginPage';

describe('jest with askui', () => {

  it('The user opens the Agora application', async () => {
    await driver.annotate();
    await driver.click().element().above().text().withText('agora QA').exec();
    await driver.waitFor(2000).exec();
  });

  it('The user navigates to login screen', async () => {
    try{
      await driver.annotate();
      await driver.click().button().contains().text("Si, soy usuario").exec();
    }catch (error) {
      await driver.click().button().contains().text("Don't allow").exec();
      await driver.click().button().contains().text("Si, soy usuario").exec();
    }
  });

  it('The user enters his identifier', async () => {
    await driver.annotate();
    const loginPage = new LoginPage(driver);
    await loginPage.enterIdentifier("935100051");
  });
  it('The user enters his password', async () => {
    await driver.annotate();
    const loginPage = new LoginPage(driver);
    await loginPage.enterPassword("122222");
  });
  it('The user taps the login button', async () => {
    await driver.annotate();
    const loginPage = new LoginPage(driver);
    await loginPage.tapLoginButton();
  });

  it('Login and check home screen', async () => {
    await driver.annotate();
  });
});