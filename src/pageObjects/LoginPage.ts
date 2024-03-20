// pageObjects/loginPage.ts
import { UiControlClient } from 'askui';
import BasePage from './BasePage';

const identifierLabel = 'Celular';
const passwordLabel = 'Clave (6 dígitos)';
const loginButtonLabel = 'Ingresar';

class LoginPage extends BasePage {
  constructor(driver: UiControlClient) {
    super(driver);
  }

  async login(cellNumber: string, password: string): Promise<void> {
    await this.enterIdentifier(cellNumber);
    await this.enterPassword(password);
    await this.tapLoginButton();
  }

  async enterIdentifier(text: string): Promise<void> {
    await this.enterText(text, identifierLabel);
  }

  async enterPassword(text: string): Promise<void> {
    await this.clickInputField(passwordLabel);
    await this.clickPasswordButtons(text);
  }

  async tapLoginButton(): Promise<void> {
    await this.clickButton(loginButtonLabel);
  }


}

export default LoginPage;
