describe('Teste com input no site de exemplo', () => {
  it('Preenche um campo de input e verifica o valor', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('teste@example.com')
      .should('have.value', 'teste@example.com')
  })
})
