class LoginPage{
    get emailInput(){return cy.get('.main [title="email"]')}
    get passwordInput(){return cy.get('.main [type="password"]')}
    get signinBtn(){return cy.get('.main [type="submit"]')}

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.signinBtn.should('be.visible').click();
      }
}

export default new LoginPage