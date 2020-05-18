describe('Counter Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads3434343', () => {
    cy.get('.increment').click();
    cy.contains('.counter', 1);
    // cy.get('.counter').should('have.text', '1');
  });
});
