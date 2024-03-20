import { UiControlClient } from "askui";
import InputField from "../components/InputField";


class BasePage {
    constructor(private driver: UiControlClient) {
        this.driver = driver;
    }

    async enterText(text: string, label: string) {
        const inputField = new InputField(this.driver, label);
        await inputField.enterText(text);
    }

    async clickInputField(label: string) {
        const inputField = new InputField(this.driver, label);
        await inputField.click();
    }

    async clickButton(label: string) {
        await this.driver.click().button().contains().text(label).exec();
    }

    async clickPasswordButtons(password: string) {
        for (const digit of password) {
          console.log(digit);
          await this.driver.click().element().special("text").withText(digit).exec();
        }
      }

}

export default BasePage;
