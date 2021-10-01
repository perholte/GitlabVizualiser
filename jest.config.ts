// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
export default config;