describe('Saucedemo Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Berhasil Login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.get('.app_logo').should('be.visible')
    cy.url().should('include','inventory.html')
  })
  it('Gagal Login - Salah Password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('xxxxxxx')
    cy.get('.submit-button.btn_action').click()
  })
  it('Gagal Login - Locked User', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
  })
  it('passes', () => {
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
})