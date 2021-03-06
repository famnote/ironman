const functions = require('firebase-functions');

const api = require('./src/api');

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '1GB',
};

/**
 * Configures Firebase Functions
 * to use the API
 */
exports.api = functions
  .region('asia-northeast1')
  .runWith(runtimeOpts)
  .https.onRequest(api);
