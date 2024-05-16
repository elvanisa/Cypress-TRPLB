// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('testlogin', (username,password) => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username).should('be.visible')
    cy.wait(100)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

Cypress.Commands.add('testketik', (element,value) => {
    cy.get(element).clear().type(value)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })