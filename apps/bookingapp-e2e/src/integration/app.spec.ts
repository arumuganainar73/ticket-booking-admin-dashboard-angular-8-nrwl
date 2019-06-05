import { getGreeting } from '../support/app.po';

describe('bookingapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bookingapp!');
  });
});
