/// <reference types="cypress" />

import SignUpPage from '../../pageObjects/pages/signup-page';


var signupPage = new SignUpPage();



describe('Authentify user can signup', () => {

    before(function () {

        cy.generateFixture();
        cy.navigateToManatalSite();

    });

    it('Should open free trial page', () => {
        signupPage.displayHeaderText();
        signupPage.getHeaderText().contains('Start Your Free Trial');
        signupPage.getFreeTrialDaysText().contains('14-day free trial and no credit card required.');


    })
    it('Should display all the input fields, buttons and links', () => {
        signupPage.displayLoginLink();
        signupPage.displayNameInputField();
        signupPage.displayOrganizationNameInputField();
        signupPage.displayAgencyRadioButton();
        signupPage.displayCompanyRadioButton();
        signupPage.displayCompanyEmailAddressInputField();
        signupPage.displayConfirmCompanyEmailAddressInputField();
        signupPage.displayPasswordInputField();
        signupPage.displayCountrySelectorDropDownMenu();
        signupPage.displayPhoneNumberInputField();
        signupPage.displayAgreeCheckbox();
        signupPage.displayPrivacyPolicyLink();
        signupPage.displayTermsConditionLink();
        signupPage.displaySignupButton();
    })


    it('Check that the required fields of the signup form behave as expected', () => {
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displayErrorMessageOfNameInputField();
        signupPage.displayErrorMessageOfOrganizationNameInputField();
        signupPage.displayErrorMessageOfCompanyEmailAddressInputField();
        signupPage.displayErrorMessageOfConfirmCompanyEmailAddressInputField();
        signupPage.displayErrorMessageOfPasswordInputField();
        signupPage.displayErrorMessageOfAgreeCheckbox();

    })

    it('Check that the privacy policy & terms and conditions is required to submit the form', () => {
        signupPage.inputName();
        signupPage.inputOrganizationName();
        signupPage.inputCompanyEmail();
        signupPage.inputConfirmCompanyEmail();
        signupPage.inputPassword();
        signupPage.selectCountyCode();
        signupPage.inputPhoneNumber();
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displayErrorMessageOfAgreeCheckbox();
     
    })

    it('Check that the "confirm your email-address" page is displayed after the form submission and includes the email address added by the user in the sign up form', () => {
        signupPage.checkIAgreeCheckbox();
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displaytConfirmYourEmailText();
        signupPage.displayContactUsLink();
        signupPage.displayRegisteredEmailText();

    })


})
