import HomePage from "../fixtures/POM/home.page";
import LoginPage from "../fixtures/POM/login.page";
import ProfilePage from "../fixtures/POM/profile.page";

let userData;
let verificationText;

describe("Login", () => {
  before("", () => {
    cy.fixture("userCredentials.json").then((data) => {
      userData = data;
    });
    cy.fixture("verificationText.json").then((message) => {
      verificationText = message;
    });
  });

  beforeEach("Visit login page", () => {
    cy.visit("/");
  });

  it("Should login with existing credentials", () => {
    HomePage.loginBtn.click();
    LoginPage.login(userData.email, userData.password);
    ProfilePage.logoutBtn.should("be.visible");
  });

  it("Should not login with invalid password", () => {
    HomePage.loginBtn.click();
    LoginPage.login(userData.email, userData.invalidPassword);
    cy.contains(verificationText.invalidPasswordMessage).should("be.visible");
  });

  it("Should logout", () => {
    HomePage.loginBtn.click();
    LoginPage.login(userData.email, userData.password);
    ProfilePage.logoutBtn.click();
    HomePage.loginBtn.should("be.visible");
  });
});