import { faker } from "@faker-js/faker";
import HomePage from "../fixtures/POM/home.page";
import SignupPage from "../fixtures/POM/signup.page";
import QuizPage from "../fixtures/POM/quiz.page";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Should take the quiz and register account", () => {
    HomePage.quizBtn.click();
    QuizPage.startQuizBtn.click();
    QuizPage.aboutYouModule();
    QuizPage.yourTastesModule();
    QuizPage.yourDailyRoutineModule();
    cy.url().should("include", "/building");
    cy.url({ timeout: 10000 }).should("include", "/signup");
    SignupPage.registerAccount(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    //cy.url().should('include','/limited-time')
  });
});