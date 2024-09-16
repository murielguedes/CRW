/// <reference types = "Cypress"/> 

const elemento = require('./elementos').ELEMENTOS


describe('Testes funcionais de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin'); 
      });
    it('Login com dados válidos', () => {
        cy.get('#username'). type ('anaflor01')
        cy.get('#password'). type ('@naflor01')
        cy.get('.MuiButton-label').click()
        cy.get('[data-test="app-name-logo"]').should('exist')
    });

    it('Tentativa de login com o campo Username vazio', () => {
        cy.get('#username').click
        cy.get('#password').type ('@naflor01')
        cy.get('.PrivateSwitchBase-input-14'). should('exist')
        cy.get('button[data-test="signin-submit"]').should('be.disabled')
    });

    it('Tentativa de login com o campo Password vazio', () => {
        cy.get('#username'). type ("anaflor01")
        cy.get('#password').click ()
        cy.get('button[data-test="signin-submit"]').should('be.disabled')
    });

    
    it('Login utilizando Remember me', () => {
        cy.get('#username'). type ('anaflor01')
        cy.get('#password'). type ('@naflor01')
        cy.get('.PrivateSwitchBase-input-14').click()
        cy.get('.MuiButton-label').click()
        cy.get('#username').should('have.value', 'anaflor01')
        cy.get('.PrivateSwitchBase-input-14').should('be.enabled')
        
        

    });


});