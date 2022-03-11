const lambdaLaunchOptions = {
    args: [
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
    ],
};

module.exports = {
    browsers: ['chromium'],
    launchOptions: {
        headless: true,
        ...lambdaLaunchOptions,
    },
};
