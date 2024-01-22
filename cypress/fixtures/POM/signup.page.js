class SignupPage{
    get registerBtn(){ return cy.get('[href="/auth/register"]')}
    get firstNameInput(){return cy.get('[data-cy="signup-form-first-name"]')};
    get lastNameInput(){return cy.get('[title="last-name"]')};
    get emailInput(){return cy.get('[data-cy="signup-form-email"]')};
    get passwordInput(){return cy.get('[data-cy="signup-form-password"]')};
    get signupBtn(){return cy.get('[data-cy="signup-form-submit-button"]')};

    registerAccount = (firstName, lastName, email, password) => {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        //this.signupBtn.click();
      };
}

export default new SignupPage