// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
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

    const child_process = require('child_process');
    try {
        const result = child_process.spawnSync('npx', ['playwright', 'test', '__tests__/', '--reporter', 'list', '--config', 'playwright.config.js'], { encoding: 'utf8' });
        console.log('Execution Result: \n', result.stdout);

        response = {
            statusCode: 200,
            body: JSON.stringify({ message: result.stdout }),
        };
        return response;
    } catch(err) {
        console.log(err);
        return err;
    }
};
