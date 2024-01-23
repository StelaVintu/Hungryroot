class QuizPage {
  get startQuizBtn() {
    return cy.get('[data-cy="quiz-page-intro-button"]');
  }
  get mePlusOne() {
    return cy.get(
      '[data-cy="quiz-page-hello-toggle-household-size-me-plus-one-label"]'
    );
  }
  get increaseBtn() {
    return cy.get(
      '[data-cy="quiz-page-hello-question-number-adults-input-increase"]'
    );
  }
  get nextBtn() {
    return cy.get('[data-cy="quiz-button-next"]');
  }
  get goalOneLabel() {
    return cy.get('[data-cy="quiz-page-hello-toggle-goal-9-label"]');
  }
  get goalTwoLabel() {
    return cy.get('[data-cy="quiz-page-hello-toggle-goal-9-label"]');
  }
  get goalThreeLabel() {
    return cy.get('[data-cy="quiz-page-hello-toggle-goal-12-label"]');
  }
  get pescatarianToggle() {
    return cy.get('[data-cy="quiz-page-eating-habits-toggle-pescatarian"]');
  }
  get lessSugarToggle() {
    return cy.get('[data-cy="quiz-page-macro-nutrient-toggle-tag-24"]');
  }
  get extraCookingTimeToggle() {
    return cy.get(
      '[data-cy="quiz-page-cooking-habits-toggle-dont-mind-extra-time"]'
    );
  }
  get prepingToggle() {
    return cy.get(
      '[data-cy="quiz-page-cooking-habits-toggle-chopping-or-prepping"]'
    );
  }
  get ovenApplianceToggle() {
    return cy.get('[data-cy="quiz-page-appliances-toggle-tag-207"]');
  }
  get mediterranianCuisineToggle() {
    return cy.get(
      '[data-cy="quiz-page-cuisines-toggle-tag-79-binary-rating-thumbsup"]'
    );
  }
  get mexicanCuisineToggle() {
    return cy.get(
      '[data-cy="quiz-page-cuisines-toggle-tag-80-binary-rating-thumbsup"]'
    );
  }
  get freshHerbToggle() {
    return cy.get(
      '[data-cy="quiz-page-flavors-toggle-tag-53-binary-rating-thumbsup"]'
    );
  }
  get creamyAndRichToggle() {
    return cy.get(
      '[data-cy="quiz-page-flavors-toggle-tag-50-binary-rating-thumbsup"]'
    );
  }
  get fishAbsoluttelyToggle() {
    return cy.get(
      '[data-cy="quiz-page-seafood-toggle-tag-4-button-absolutely"]'
    );
  }
  get smokedFishToggle() {
    return cy.get(
      '[data-cy="quiz-page-seafood-toggle-tag-6-button-absolutely"]'
    );
  }
  get shellfishToggle() {
    return cy.get(
      '[data-cy="quiz-page-seafood-toggle-tag-5-button-absolutely"]'
    );
  }
  get plantProteinBeansToggle() {
    return cy.get(
      '[data-cy="quiz-page-plants-toggle-tag-9-button-absolutely"]'
    );
  }
  get mildHeatToggle() {
    return cy.get('[data-cy="quiz-page-spice-toggle-tag-20"]');
  }
  get eggsForBkfastToggle() {
    return cy.get('[data-cy="quiz-page-breakfast-toggle-tag-28"]');
  }
  get frequuencyBtn() {
    return cy.get(
      '[data-cy="quiz-page-breakfast-question-frequency-options-button-some"]'
    );
  }
  get lunchDinnerToggle() {
    return cy.get('[data-cy="quiz-page-lunch-dinner-toggle-tag-2"]');
  }
  get lunchFrequencyBtn() {
    return cy.get(
      '[data-cy="quiz-page-lunch-dinner-question-lunch-frequency-options-button-some"]'
    );
  }
  get dinnerFrequencyBtn() {
    return cy.get(
      '[data-cy="quiz-page-lunch-dinner-question-dinner-frequency-options-button-some"]'
    );
  }
  get smothieSnackToggle() {
    return cy.get('[data-cy="quiz-page-snacks-toggle-tag-212"]');
  }
  get snacksFrequencyBtn() {
    return cy.get(
      '[data-cy="quiz-page-snacks-question-frequency-options-button-some"]'
    );
  }
  get sweetsToggle() {
    return cy.get('[data-cy="quiz-page-sweets-toggle-tag-163"]');
  }
  get sweetsFrequencyBtn() {
    return cy.get(
      '[data-cy="quiz-page-sweets-question-frequency-options-button-some"]'
    );
  }

answerAboutYouQuestions(){
    this.mePlusOne.click();
    this.increaseBtn.click();
    this.nextBtn.click();
    this.goalOneLabel.click();
    this.goalTwoLabel.click();
    this.goalThreeLabel.click();
    this.nextBtn.click();
    this.pescatarianToggle.click()
    this.nextBtn.click();
    this.lessSugarToggle.click();
    this.nextBtn.click();
    this.extraCookingTimeToggle.click();
    this.prepingToggle.click();
    this.nextBtn.click();
    this.ovenApplianceToggle.click();
    this.nextBtn.click();
}

answerAllTastesQuestions(){
    this.mediterranianCuisineToggle.click();
    this.mexicanCuisineToggle.click();
    this.nextBtn.click();
    this.freshHerbToggle.click();
    this.creamyAndRichToggle.click();
    this.nextBtn.click();
    this.fishAbsoluttelyToggle.click();
    this.smokedFishToggle.click();
    this.shellfishToggle.click();
    this.nextBtn.click();
    this.plantProteinBeansToggle.click();
    this.nextBtn.click();
    this.nextBtn.click();
    this.mildHeatToggle.click();
    this.nextBtn.click();
}

answerDailyRoutineQuestions(){
    this.eggsForBkfastToggle.click();
    this.nextBtn.click();
    this.frequuencyBtn.click();
    this.nextBtn.click();
    this.lunchDinnerToggle.click();
    this.nextBtn.click();
    this.lunchFrequencyBtn.click();
    this.dinnerFrequencyBtn.click();
    this.nextBtn.click();
    this.nextBtn.click();
    this.smothieSnackToggle.click();
    this.nextBtn.click();
    this.snacksFrequencyBtn.click();
    this.nextBtn.click();
    this.sweetsToggle.click();
    this.nextBtn.click();
    this.sweetsFrequencyBtn.click();
    this.nextBtn.click();
}
}

export default new QuizPage();
