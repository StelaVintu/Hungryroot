class HomePage{
    get quizBtn(){ return cy.get('[data-cy="header-nav-button"]')}
    get loginBtn(){return cy.get('[data-cy="header-nav-link"]')}
}

export default new HomePage