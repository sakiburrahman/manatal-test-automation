import BasePage from "../base-page";


// Page Element of Signup page

const FREE_TRIAL_TEXT = 'h5';
const NUMBER_OF_DAYS_FREE_TRIAL_TEXT = '.mt-3';
const NAME_INPUT_FIELD = '#name';
const NAME_INPUT_FIELD_LABEL = '#account_signup > :nth-child(1)';
const ORGANIZATION_NAME_INPUT_FIELD = '#organization_name';
const ORGANIZATION_NAME_INPUT_FIELD_LABEL = '#account_signup > :nth-child(2)';
const AGENCY_RADIO_BUTTON = '#agency';
const COMPANY_RADIO_BUTTON = '#company';
const COMPANY_EMAIL_ADDRESS_INPUT_FIELD = '#company_email_address';
const COMPANY_EMAIL_ADDRESS_INPUT_FIELD_LABEL = '#account_signup > :nth-child(4)';
const CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD = '#confirm_company_email_address';
const CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD_LABEL = '#account_signup > :nth-child(5)';
const PASSWORD_INPUT_FIELD = '#password';
const PASSWORD_INPUT_FIELD_LABEL = '#account_signup > :nth-child(6)'
const COUNTRY_SELECTOR_DROPDOWN_MENU = '.vti__selection > .vti__flag';
const BD_COUNTRY_CODE = 'li:nth-of-type(17) > strong'
const PHONE_NUMBER_INPUT_FIELD = '[name="phone"]';
const AGREE_CHECKBOX = '#agree';
const PRIVACY_POLICY_LINK = '[href="https://www.manatal.com/privacy-policy/"]';
const TERMS_CONDITION_LINK = '[href="https://www.manatal.com/terms-and-conditions/"]';
const SIGNUP_BUTTON = '.signup-material-button-contained';
const LOGIN_LINK = '.ml-1';
const FIRST_ERROR_MESSAGE = '#account_signup > span:nth-of-type(1)'
const ERROR_MESSAGE_OF_NAME_INPUT_FIELD = '#account_signup > span:nth-of-type(1)'
const ERROR_MESSAGE_OF_ORGANIZATION_NAME_INPUT_FIELD = 'span:nth-of-type(2)'
const ERROR_MESSAGE_OF_COMPANY_EMAIL_ADDRESS_INPUT_FIELD = 'span:nth-of-type(3)'
const ERROR_MESSAGE_OF_CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD = 'span:nth-of-type(4)'
const ERROR_MESSAGE_OF_PASSWORD_INPUT_FIELD = 'span:nth-of-type(5)'
const ERROR_MESSAGE_OF_AGREE_CHECKBOX = '.red--text' //'span:nth-of-type(6)'
const CONFIRM_YOUR_EMAIL_TEXT = '.mt-4'
const CONTACT_US_LINK = '[href="javascript:void(0);"]'
const REGISTERED_EMAIL_TEXT = '.pa-2'





var basePage = new BasePage();

// *********************************************** Display Navigate and Click function of signup page *********************************************** 

export default class SignUpPage {

    getHeaderText = () => cy.get(FREE_TRIAL_TEXT);
    getFreeTrialDaysText = () => cy.get(NUMBER_OF_DAYS_FREE_TRIAL_TEXT);
    getNameInputField = () => cy.get(NAME_INPUT_FIELD);
    getNameInputFieldLabel = () => cy.get(NAME_INPUT_FIELD_LABEL);
    getOrganizationNameInputField = () => cy.get(ORGANIZATION_NAME_INPUT_FIELD);
    getOrganizationNameInputFieldLabel = () => cy.get(ORGANIZATION_NAME_INPUT_FIELD_LABEL);
    getAgencyRadioButton = () => cy.get(AGENCY_RADIO_BUTTON);
    getCompanyRadioButton = () => cy.get(COMPANY_RADIO_BUTTON);
    getCompanyEmailAddressInputField = () => cy.get(COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
    getCompanyEmailAddressInputFieldLabel = () => cy.get(COMPANY_EMAIL_ADDRESS_INPUT_FIELD_LABEL)
    getConfirmCompanyEmailAddressInputField = () => cy.get(CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
    getConfirmCompanyEmailAddressInputFieldLabel = () => cy.get(CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD_LABEL);
    getPasswordInputField = () => cy.get(PASSWORD_INPUT_FIELD);
    getPasswordInputFieldLabel = () => cy.get(PASSWORD_INPUT_FIELD_LABEL);
    getCountrySelectorDropDownMenu = () => cy.get(COUNTRY_SELECTOR_DROPDOWN_MENU);
    getBDCountryCode = () => cy.get(BD_COUNTRY_CODE);
    getPhoneNumberInputField = () => cy.get(PHONE_NUMBER_INPUT_FIELD);
    getAgreeCheckbox = () => cy.get(AGREE_CHECKBOX);
    getPrivacyPolicyLink = () => cy.get(PRIVACY_POLICY_LINK);
    getTermsConditionLink = () => cy.get(TERMS_CONDITION_LINK);
    getSignupButton = () => cy.get(SIGNUP_BUTTON);
    getLoginLink = () => cy.get(LOGIN_LINK);


    getFirstErrorMessage = () => cy.get(FIRST_ERROR_MESSAGE);
    getErrorMessageOfNameInputField = () => cy.get(ERROR_MESSAGE_OF_NAME_INPUT_FIELD);
    getErrorMessageOfOrganizationNameInputField = () => cy.get(ERROR_MESSAGE_OF_ORGANIZATION_NAME_INPUT_FIELD);
    getErrorMessageOfCompanyEmailAddressInputField = () => cy.get(ERROR_MESSAGE_OF_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
    getErrorMessageOfConfirmCompanyEmailAddressInputField = () => cy.get(ERROR_MESSAGE_OF_CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
    getErrorMessageOfPasswordInputField = () => cy.get(ERROR_MESSAGE_OF_PASSWORD_INPUT_FIELD);
    getErrorMessageOfAgreeCheckbox = () => cy.get(ERROR_MESSAGE_OF_AGREE_CHECKBOX);
    getConfirmYourEmailText = () => cy.get(CONFIRM_YOUR_EMAIL_TEXT);
    getContactUsLink = () => cy.get(CONTACT_US_LINK);

    getRegisteredEmailText = () => cy.get(REGISTERED_EMAIL_TEXT);




    // ----------------------------------- Navigate Funtion ----------------------------------- 

    // ----------------------------------- Display Funtion ----------------------------------- 

    displayHeaderText = () => {
        this.getHeaderText().isVisible(FREE_TRIAL_TEXT);
        basePage.logInfo('[Header] text is being displayed');
    };

    displayFreeTrialDaysText = () => {
        this.getFreeTrialDaysText().isVisible(NUMBER_OF_DAYS_FREE_TRIAL_TEXT);
        basePage.logInfo('[Free Trial] text is being displayed');
    };

    displayNameInputField = () => {
        this.getNameInputField().isVisible(NAME_INPUT_FIELD);
        basePage.logInfo('[Name] input field is being displayed');
    };

    displayOrganizationNameInputField = () => {
        this.getOrganizationNameInputField().isVisible(ORGANIZATION_NAME_INPUT_FIELD);
        basePage.logInfo('[Organization Name] input field is being displayed');
    };

    displayAgencyRadioButton = () => {
        this.getAgencyRadioButton().isVisible(AGENCY_RADIO_BUTTON);
        basePage.logInfo('[Agency] radio button is being displayed');
    };

    displayCompanyRadioButton = () => {
        this.getCompanyRadioButton().isVisible(COMPANY_RADIO_BUTTON);
        basePage.logInfo('[Company] radio button is being displayed');
    };

    displayCompanyEmailAddressInputField = () => {
        this.getCompanyEmailAddressInputField().isVisible(COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
        basePage.logInfo('[Company Email Address] input field is being displayed');
    };

    displayConfirmCompanyEmailAddressInputField = () => {
        this.getConfirmCompanyEmailAddressInputField().isVisible(CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
        basePage.logInfo('[Confirm Company Email Address] input field is being displayed');
    };

    displayPasswordInputField = () => {
        this.getPasswordInputField().isVisible(PASSWORD_INPUT_FIELD);
        basePage.logInfo('[Password] input field is being displayed');
    };

    displayCountrySelectorDropDownMenu = () => {
        this.getCountrySelectorDropDownMenu().isVisible(COUNTRY_SELECTOR_DROPDOWN_MENU);
        basePage.logInfo('[Country Selector] dropdown menu is being displayed');
    };

    displayPhoneNumberInputField = () => {
        this.getPhoneNumberInputField().isVisible(PHONE_NUMBER_INPUT_FIELD);
        basePage.logInfo('[Phone Number] input field is being displayed');
    };

    displayAgreeCheckbox = () => {
        this.getAgreeCheckbox().isVisible(AGREE_CHECKBOX);
        basePage.logInfo('[Agree] checkbox is being displayed');
    };

    displayPrivacyPolicyLink = () => {
        this.getPrivacyPolicyLink().isVisible(PRIVACY_POLICY_LINK);
        basePage.logInfo('[Privacy Policy] link is being displayed');
    };

    displayTermsConditionLink = () => {
        this.getTermsConditionLink().isVisible(TERMS_CONDITION_LINK);
        basePage.logInfo('[Terms and Condition] link is being displayed');
    };

    displaySignupButton = () => {
        this.getSignupButton().isVisible(SIGNUP_BUTTON);
        basePage.logInfo('[Signup] button is being displayed');
    };

    displayLoginLink = () => {
        this.getLoginLink().isVisible(LOGIN_LINK);
        basePage.logInfo('[Login] link is being displayed');
    };

    displayErrorMessageOfNameInputField = () => {
        this.getErrorMessageOfNameInputField().isVisible(ERROR_MESSAGE_OF_NAME_INPUT_FIELD);
        this.getErrorMessageOfNameInputField().contains('The name field is required');
        basePage.logInfo('[The name field is required] error message is being displayed under [Name] input field');
    };

    displayErrorMessageOfOrganizationNameInputField = () => {
        this.getErrorMessageOfOrganizationNameInputField().isVisible(ERROR_MESSAGE_OF_ORGANIZATION_NAME_INPUT_FIELD);
        this.getErrorMessageOfOrganizationNameInputField().contains('The organization name field is required');
        basePage.logInfo('[The organization name field is required] error message is being displayed under [Organization Name] input field');
    };

    displayErrorMessageOfCompanyEmailAddressInputField = () => {
        this.getErrorMessageOfCompanyEmailAddressInputField().isVisible(ERROR_MESSAGE_OF_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
        this.getErrorMessageOfCompanyEmailAddressInputField().contains('The company email address field is required');
        basePage.logInfo('[The company email address field is required] error message is being displayed under [Company Email Address] input field');
    };

    displayErrorMessageOfConfirmCompanyEmailAddressInputField = () => {
        this.getErrorMessageOfConfirmCompanyEmailAddressInputField().isVisible(ERROR_MESSAGE_OF_CONFIRM_COMPANY_EMAIL_ADDRESS_INPUT_FIELD);
        this.getErrorMessageOfConfirmCompanyEmailAddressInputField().contains('The confirm company email address field is required');
        basePage.logInfo('[The confirm company email address field is required] error message is being displayed under [Confirm Company Email Address] input field');
    };

    displayErrorMessageOfPasswordInputField = () => {
        this.getErrorMessageOfPasswordInputField().isVisible(ERROR_MESSAGE_OF_PASSWORD_INPUT_FIELD);
        this.getErrorMessageOfPasswordInputField().contains('The password field is required');
        basePage.logInfo('[The password field is required] error message is being displayed under [Password] input field');
    };

    displayErrorMessageOfAgreeCheckbox = () => {
        this.getErrorMessageOfAgreeCheckbox().isVisible(ERROR_MESSAGE_OF_AGREE_CHECKBOX);
        this.getErrorMessageOfAgreeCheckbox().contains('The agree field is required');
        basePage.logInfo('[The agree field is required] error message is being displayed under [I agree] checkbox');
    };


    displaytConfirmYourEmailText = () => {
        this.getConfirmYourEmailText().isVisible(CONFIRM_YOUR_EMAIL_TEXT);
        this.getConfirmYourEmailText().contains('Confirm your e-mail address');
        basePage.logInfo('[Confirm your e-mail address] text is being displayed in [confirmation] page');
    };

    displayContactUsLink = () => {
        this.getContactUsLink().isVisible(CONTACT_US_LINK);
        this.getContactUsLink().contains('contact us');
        basePage.logInfo('[contact us] link is being displayed in [confirmation] page');
    };

    displayRegisteredEmailText = () => {
        cy.fixture('registeredUserInfo').then((data) => {
            const EMAIL = data.emailAddress;
            this.getRegisteredEmailText().isVisible(REGISTERED_EMAIL_TEXT);
            this.getRegisteredEmailText().contains(EMAIL);
            basePage.logInfo('Registered email address is being dispayed in [confirmation] page');
        });
    };


    // ----------------------------------- Search Funtion ----------------------------------- 

    // ----------------------------------- Select Funtion ----------------------------------- 

    selectCountyCode = () => {
        this.displayCountrySelectorDropDownMenu();
        this.getCountrySelectorDropDownMenu().click();
        basePage.pause(500);
        basePage.logInfo('Clicked on [Country Code] dropdown menu');
        this.getBDCountryCode().click();
        this.getCountrySelectorDropDownMenu().should('have.class', 'bd');
        basePage.logInfo('[Bangladesh] county code has been selected');
    };


    selectCompanyRadioButton = () => {
        this.displayCompanyRadioButton();
        this.getCompanyRadioButton().click();
        basePage.logInfo('[Compnay] radio button has been selected');
    };

    // ----------------------------------- Check Funtion ----------------------------------- 

    checkIAgreeCheckbox = () => {
        this.displayAgreeCheckbox();
        this.getAgreeCheckbox().check();
        this.getAgreeCheckbox().should('have.attr', 'aria-invalid', 'false')
        basePage.logInfo('[I Agree] checkbox has been checked');
    };
    // ----------------------------------- Click Funtion ----------------------------------- 

    clickOnSignupButton = () => {
        this.getSignupButton().click();
        basePage.logInfo('Clicked on [Signup] button');
    };



    // ----------------------------------- Input Funtion ----------------------------------- 

    inputName = () => {
        cy.fixture('registeredUserInfo').then((data) => {
            const FULL_NAME = data.userName;
            this.getNameInputField().clear();
            basePage.logInfo('[Name] input box has been cleared');
            this.getNameInputField().type(FULL_NAME);
            basePage.logInfo(FULL_NAME + 'has been entered in [Name] input field');
        });
    };

    inputLongName = () => {
        const FULL_NAME = 'Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jonathon_Jona';
        this.getNameInputField().clear();
        basePage.logInfo('[Name] input box has been cleared');
        this.getNameInputField().type(FULL_NAME);
        basePage.logInfo(FULL_NAME + 'has been entered in [Name] input field');


    };

    inputOrganizationName = () => {
        cy.fixture('registeredUserInfo').then((data) => {
            const ORGANIZATION_NAME = data.organizationName;
            this.getOrganizationNameInputField().clear();
            basePage.logInfo('[Organization Name] input box has been cleared');
            this.getOrganizationNameInputField().type(ORGANIZATION_NAME);
            basePage.logInfo(ORGANIZATION_NAME + ' has been entered in [Organization Name] input field');
        });
    };

    inputLongOrganizationName = () => {
        const ORGANIZATION_NAME = 'ABC_Corporation_Limited_ABC_Corporation_Limited_ABC_Corporation_Limited ABC_Corporation_Limited_ABC_Corporation_Limited_ABC_Corporation_Limited ABC_Corporation_Limited_ABC_Corporation_Limited_ABC_Corporation_Limited ABC_Corporation_Limited_ABC_Corporation_';
        this.getOrganizationNameInputField().clear();
        basePage.logInfo('[Organization Name] input box has been cleared');
        this.getOrganizationNameInputField().type(ORGANIZATION_NAME);
        basePage.logInfo(ORGANIZATION_NAME + ' has been entered in [Organization Name] input field');

    };


    inputInvalidCompanyEmail = () => {
        const EMAIL = 'abc@gmail';
        this.getCompanyEmailAddressInputField().clear();
        basePage.logInfo('[Confirm Company Email Address] input box has been cleared');
        this.getCompanyEmailAddressInputField().type(EMAIL);
        basePage.logInfo(EMAIL + ' has been entered in [Confirm Company Email Address] input field');

    };

    inputLongCompanyEmail = () => {
        const EMAIL = 'testmanatalsignup_1testmanatalsignup_2testmanatalsignup_3testmanatalsignup_4testmanatalsignup_5testmanatalsignup_6testmanatalsignup_7testmanatalsignup_8testmanatalsignup_9testmanatalsignup_10testmanatalsignup_11testmanatalsignup_12testmanatalsig@gmail.com';
        this.getCompanyEmailAddressInputField().clear();
        basePage.logInfo('[Confirm Company Email Address] input box has been cleared');
        this.getCompanyEmailAddressInputField().type(EMAIL);
        basePage.logInfo(EMAIL + ' has been entered in [Confirm Company Email Address] input field');

    };


    inputCompanyEmail = () => {
        cy.fixture('registeredUserInfo').then((data) => {
            const EMAIL = data.emailAddress;
            this.getCompanyEmailAddressInputField().clear();
            basePage.logInfo('[Company Email Address] input box has been cleared');
            this.getCompanyEmailAddressInputField().type(EMAIL);
            basePage.logInfo(EMAIL + ' has been entered in [Company Email Address] input field');
        });
    };

    inputConfirmCompanyEmail = () => {
        cy.fixture('registeredUserInfo').then((data) => {
            const EMAIL = data.emailAddress;
            this.getConfirmCompanyEmailAddressInputField().clear();
            basePage.logInfo('[Confirm Company Email Address] input box has been cleared');
            this.getConfirmCompanyEmailAddressInputField().type(EMAIL);
            basePage.logInfo(EMAIL + ' has been entered in [Confirm Company Email Address] input field');
        });
    };

    inputDifferentConfirmCompanyEmail = () => {
        const EMAIL = 'abc@gmail.com';
        this.getConfirmCompanyEmailAddressInputField().clear();
        basePage.logInfo('[Confirm Company Email Address] input box has been cleared');
        this.getConfirmCompanyEmailAddressInputField().type(EMAIL);
        basePage.logInfo(EMAIL + ' has been entered in [Confirm Company Email Address] input field');

    };

    inputPassword = () => {
        this.getPasswordInputField().clear();
        basePage.logInfo('[Password] input box has been cleared');
        this.getPasswordInputField().type('Esd!@3');
        basePage.logInfo('Password has been entered in [Password] input field');

    };

    inputLongPassword = () => {
        const PASSWORD = 'I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhFnTNCah&I$jhF';
        this.getPasswordInputField().clear();
        basePage.logInfo('[Password] input box has been cleared');
        this.getPasswordInputField().type(PASSWORD);
        basePage.logInfo('Password has been entered in [Password] input field');

    };

    inputPhoneNumber = () => {
        const PHONE_NUMBER = '01774377773';
        this.getPhoneNumberInputField().clear();
        basePage.logInfo('[Phone Numbe] input box has been cleared');
        this.getPhoneNumberInputField().type(PHONE_NUMBER);
        basePage.logInfo('Phone number has been entered in [Phone Number] input field');

    };

    inputInvalidPhoneNumber = () => {
        const PHONE_NUMBER = '016439213492';
        this.getPhoneNumberInputField().clear();
        basePage.logInfo('[Phone Numbe] input box has been cleared');
        this.getPhoneNumberInputField().type(PHONE_NUMBER);
        basePage.logInfo('Phone number has been entered in [Phone Number] input field');
    };

    inputLongPhoneNumber = () => {
        const PHONE_NUMBER = '223322441344444444344';
        this.getPhoneNumberInputField().clear();
        basePage.logInfo('[Phone Numbe] input box has been cleared');
        this.getPhoneNumberInputField().type(PHONE_NUMBER);
        basePage.logInfo('Phone number has been entered in [Phone Number] input field');
    };

    inputAlphanumericPhoneNumber = () => {
        const PHONE_NUMBER = '017 43EE$3';
        this.getPhoneNumberInputField().clear();
        basePage.logInfo('[Phone Numbe] input box has been cleared');
        this.getPhoneNumberInputField().type(PHONE_NUMBER);
        basePage.logInfo('Phone number has been entered in [Phone Number] input field');
    };




}

