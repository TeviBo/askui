/*******************************************************************************************************
 * @author: belen.ochi@pinapp.tech
 * @description: Utility class for common page obects.
 ******************************************************************************************************/
import { driver } from "../helpers/hooks";

const SELECTORS = {};

class Utils {
  async setPassword(numberOne: string, numberTwo: string) {
    let cont = 0;
    while(cont <= 5){
        if(cont == 0){
          await driver.click().element().contains().text(numberOne).exec();
        }else await driver.click().element().text().withText(numberTwo).exec();
        cont ++;
      }
    }
}

export default new Utils();
