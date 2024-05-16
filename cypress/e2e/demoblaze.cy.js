describe('Demoblaze Test', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/')
    })
    it.skip('Berhasil Signup', () => {
      cy.get('#signin2').click()
      //cy.get('#sign-username').type('elva123')
      cy.testketik('#sign-username','elva123') //custom command
      cy.get('#sign-password').type('pass123')
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
    it('Berhasil Login', () => {
        cy.get('#login2').click()
        cy.get('#loginusername')
        .type('elva123')
        .should('be.visible')
        cy.wait(100)
        cy.get('#loginpassword').type('pass123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
    it.only('Berhasil Login Commands', () => {
        cy.testlogin('elva123','pass123')
    })
  })