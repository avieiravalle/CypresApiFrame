describe('API', () => {
  it('GET', () => {
    cy.request('GET', 'url')
      .its('status')
      .should('equal', 200);
  })
})
