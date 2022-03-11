module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    runner: 'jest-playwright-preset/runner',
    // globals: {
    //     BASE_URL: 'https://playwright.dev/',
    // },
    globalSetup: 'jest-playwright-preset/setup',
    globalTeardown: 'jest-playwright-preset/teardown',
    setupFilesAfterEnv: [
        './jest.setup.js',
        'jest-playwright-preset/lib/extends.js',
    ],
    transform: {
        '\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
};
