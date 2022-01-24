# manatal-test-automation
Test Automation Script for registration process

# To See the test cases
Navigate to cypress\test-cases\signup-test-case.xlsx

# To Install cypress
1. Download Node Js and install
2. Run cmd and install cypress using the following command 
        npm install cypress

# To Install cypress allure plugin
1. Run cmd and install using the following command 
        npm i @shelex/cypress-allure-plugin

# To Install cypress Mochawesome Reporter
1. Run cmd and install using the following command sequentially
        npm install mocha --save-dev
        npm install cypress-multi-reporters --save-dev
        npm install mochawesome --save-dev
        npm install mochawesome-merge --save-dev
        npm install mochawesome-report-generator --save-dev


# To open the cypress grid
npm run cy:open

# To run the test script
npm run cy:run

# To run the test script with mochawesome report
npm run cy:mocha

# To open the cypress grid
npm run cy:open

# To run the test script with allure report
npm run test:allure
npm run report:allure
