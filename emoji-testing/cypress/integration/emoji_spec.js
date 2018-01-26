describe('counter app', () => {

  it('should increase counter', () => {
    cy.visit('/');

    cy.get('.add').click().click();

    cy.get('.counter-text').should('have.text', 'Counter: 2')
  });

  it('should decrease counter', () => {

    cy.get('.remove').click().click();

    cy.get('.counter-text').should('have.text', 'Counter: 0')
  });

  it('should display emoji', () => {

    cy.get('.add').click().click();

    cy.get('.emoji').should('be.visible');

  })

});
