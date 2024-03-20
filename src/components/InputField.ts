import { UiControlClient } from "askui";

class InputField {
  private label: string;
  private driver: any;

  constructor(driver: UiControlClient, label: string) {
    this.driver = driver;
    this.label = label;
  }

  public async click() {
    await this.driver.click().text(this.label).exec();
  }

  public async enterText(text: string) {
    await this.click();
    await this.driver.type(text).exec();
  }
}

export default InputField;
