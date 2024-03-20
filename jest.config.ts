import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: '@askui/jest-allure-circus',
  sandboxInjectedGlobals: [
    'Math',
  ],
  reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: "./artifacts",
      filename: "test-report.html",
      expand: true
    }]
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
