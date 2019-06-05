import { getGreeting } from '../support/app.po';

describe('ticketbooking', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ticketbooking!');
  });
});
