class ProfilePage{
    get logoutBtn(){return cy.get('[href="/logout/"]')}
}

export default new ProfilePage