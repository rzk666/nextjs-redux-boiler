/* eslint-disable no-multi-assign */
let svc;
module.exports = svc = {
  getNodeEnv() {
    return process.env;
  },
  getNodeEnvMode() {
    return svc.getNodeEnvByKey('NODE_ENV') || 'test';
  },
  isProduction() {
    return svc.getNodeEnvMode() === 'production';
  },
  isDevelopment() {
    return svc.getNodeEnvMode() === 'development';
  },
  isTest() {
    return !svc.getNodeEnvMode() || svc.getNodeEnvMode() === 'test';
  },
  isServer() {
    return !process.browser;
  },
};
