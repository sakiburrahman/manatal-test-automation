/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />




// const percyHealthCheck = require('@percy/cypress/task')

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config);
//   on('task', percyHealthCheck);
//   config.viewPortWidth = 2045;
//   config.viewPortHeight = 1150;

// }




/**
 * @type {Cypress.PluginConfig}
 */

 const allureWriter = require('@shelex/cypress-allure-plugin/writer');

 module.exports = (on, config) => {
     allureWriter(on, config);
     return config;
 
 };
 
 
 