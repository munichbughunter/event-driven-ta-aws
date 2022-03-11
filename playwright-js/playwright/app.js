/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-var-requires */
const { runCLI } = require('jest');
const jestConfig = require('./jest.config');

let response;
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

exports.lambdaHandler = async (event, context) => {
    const { result } = await runCLI({
        ...jestConfig,
        testMatch: ['**/ui/**/*.spec.ts'],
    }, ['']);

    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({ message: result }),
        };
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }

    // exec('playwright test other.spec.ts --project=chromium --reporter=list', (error, stdout, stderr) => {
    // exec('playwright test -g "Open my Awesome Testing Page" --project=chromium --reporter=list', (error, stdout, stderr) => {
    // exec('playwright test __tests__/ui --project=chromium --reporter=list', (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });
};
