// utils/driver.ts
import { AnnotationLevel, AskUIAnnotationStepReporter, AskUIJestHtmlStepReporter } from '@askui/askui-reporters';
import { LogLevels, UiControlClient, UiController } from 'askui';

export default async function setUpUiControlClient(): Promise<UiControlClient | undefined> {
    // Depending on your environment setup, you may need to pass configurations to the Driver constructor.
    let uiControlClient: UiControlClient;
    try {
        uiControlClient = await UiControlClient.build({
            reporter: [
                new AskUIAnnotationStepReporter(
                    AnnotationLevel.ALL,
                    "reports/annotation_report",
                    "_annotation",

                ),
                new AskUIJestHtmlStepReporter({
                    withScreenshots: 'always' as const,
                    withDetectedElements: 'always' as const,


                })
            ],
            credentials: {
                workspaceId: 'faaecead-25a0-4062-99f2-84476e7fc8cc',
                token: 'JrnWd46hXvBW1-xdSDM6',
              },
        });
        await uiControlClient.connect();
        return uiControlClient;
    } catch (e) {
        console.log(e);
    }

    return undefined;
}


export function tearDownDriver(uiController: UiControlClient | undefined): void {
    if (uiController) {
        uiController.disconnect();
    }
}

export async function setUpUiController(){
    try{
        let uiController = new UiController({
            display: 0,
            host: 'localhost',
            port: 5554,
            logLevel: LogLevels.DEBUG,
            logFilePath: "reports\askui-logs\askui-logs.log",
            actionDelayInMs: 1000,
          });

          return uiController.start();
    }catch(e){
        console.log(e);
    }
}

