module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.ts'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
		  'pageTitle': 'Game of Life: Test Report',
      'outputPath': 'coverage/index.html',
      'boilerplate': './report.html'
    }]
  ]
};
