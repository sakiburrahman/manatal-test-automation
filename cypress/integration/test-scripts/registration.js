/// <reference types="cypress" />

import SignUpPage from '../../pageObjects/pages/signup-page';


var signupPage = new SignUpPage();



describe('Authentify user can signup', () => {

    before(function () {

        cy.generateFixture();
        cy.navigateToManatalSite();

    });

    it('Test_Case >> 100001 >> Should open free trial page', () => {
        signupPage.displayHeaderText();
        signupPage.getHeaderText().contains('Start Your Free Trial');
        signupPage.getFreeTrialDaysText().contains('14-day free trial and no credit card required.');


    })
    it('Test_Case >> 100002 >> Verify all the input fields, buttons and links are beign displayed signup page', () => {
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

    it('Test_Case >> 100003 >> Verify all the required fields have asterisk sign', () => {

        signupPage.getNameInputFieldLabel().contains('Name *');
        signupPage.getOrganizationNameInputFieldLabel().contains('Organization Name *');
        signupPage.getCompanyEmailAddressInputFieldLabel().contains('Company Email Address *');
        signupPage.getConfirmCompanyEmailAddressInputFieldLabel().contains('Confirm Company Email Address *');
        signupPage.getPasswordInputFieldLabel().contains('Password *');

    })


    it('Test_Case >> 100004 >> Check that the required fields of the signup form behave as expected', () => {
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displayErrorMessageOfNameInputField();
        signupPage.displayErrorMessageOfOrganizationNameInputField();
        signupPage.displayErrorMessageOfCompanyEmailAddressInputField();
        signupPage.displayErrorMessageOfConfirmCompanyEmailAddressInputField();
        signupPage.displayErrorMessageOfPasswordInputField();
        signupPage.displayErrorMessageOfAgreeCheckbox();

    })

    it('Test_Case >> 100005 >> Verify that name length must not be more than 255 characters', () => {
        signupPage.inputLongName();
        signupPage.getFirstErrorMessage().contains('The name field may not be greater than 255 characters');

    })

    it('Test_Case >> 100006 >> Verify that organization name length must not be more than 255 characters', () => {
        signupPage.inputName();
        signupPage.inputLongOrganizationName();
        signupPage.getFirstErrorMessage().contains('The organization name field may not be greater than 255 characters');

    })


    it('Test_Case >> 100007 >> Verify that email address must be valid', () => {
        signupPage.inputOrganizationName();
        signupPage.inputInvalidCompanyEmail();
        signupPage.getFirstErrorMessage().contains('The email address field must be a valid email');

    })

    it('Test_Case >> 100008>> Verify that email length must not be more than 254 characters', () => {
        signupPage.inputLongCompanyEmail();
        signupPage.getFirstErrorMessage().contains('The company email address field may not be greater than 254 characters');

    })


    it('Test_Case >> 100009>> Verify that company email address and confirm compnay email address must match', () => {
        signupPage.inputCompanyEmail();
        signupPage.inputDifferentConfirmCompanyEmail();
        signupPage.getFirstErrorMessage().contains('The confirm company email address confirmation does not match');

    })

    it('Test_Case >> 100010>> Verify that password length must not be more than 254 characters', () => {
        signupPage.inputConfirmCompanyEmail();
        signupPage.inputLongPassword();
        signupPage.getFirstErrorMessage().contains('The password field may not be greater than 255 characters');

    })

    it('Test_Case >> 100011 >> Check that the privacy policy & terms and conditions is required to submit the form', () => {
        signupPage.inputPassword();
        signupPage.selectCountyCode();
        signupPage.inputPhoneNumber();
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displayErrorMessageOfAgreeCheckbox();

    })

    it('Test_Case >> 100012 >> Check that the "confirm your email-address" page is displayed after the form submission and includes the email address added by the user in the sign up form', () => {
        signupPage.checkIAgreeCheckbox();
        signupPage.displaySignupButton();
        signupPage.clickOnSignupButton();
        signupPage.displaytConfirmYourEmailText();
        signupPage.displayContactUsLink();
        signupPage.displayRegisteredEmailText();

    })


})
