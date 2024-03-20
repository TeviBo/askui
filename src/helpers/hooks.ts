import setUpUiControlClient, { tearDownDriver } from '../utils/driver';


let driver: any | undefined = undefined

jest.setTimeout(60 * 10000 * 60);

beforeAll(async () => {
  driver = await setUpUiControlClient();
});

beforeEach(async () => {
  await driver.startVideoRecording();
});

// afterEach(async () => {
//   await driver.stopVideoRecording();
//   const video = await driver.readVideoRecording();
//   await AskUIAllureStepReporter.attachVideo(video);
// });

afterAll(async () => {
  tearDownDriver(driver);
});

export { driver };

